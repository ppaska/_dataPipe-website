import dynamic from 'next/dynamic';
import Layout from '@theme/Layout';
import React from 'react';
import ExampleList from '../components/ExamplesList';
import styles from './playground.module.css';

const INTERPRETER_CDN_URL = 'https://cdn.jsdelivr.net/npm/jspython-interpreter/dist/jspython-interpreter.min.js';
const JSPYTHON_MODE_URL = 'https://cdn.jsdelivr.net/npm/jspython-interpreter/dist/assets/mode-jspython.js';
const DATA_PIPE_JS_URL = 'https://cdn.jsdelivr.net/npm/datapipe-js/dist/data-pipe.min.js';
const ONLINE_EDITOR_URL = 'https://run.worksheet.systems/rest-client/jspython-editor';
const EXTENSION_URL = 'https://chrome.google.com/webstore/detail/worksheets-rest-client/bjaifffdmbokgicfacjmhdkdonpmbkbd';

const AVAILABLE_PACKAGES = {};

/**
 * Load component dynamic due to server side rendering and ace editor's requirement of existing window object.
 */
const JSPythonEditor = dynamic(
  () => import('../components/JSPythonEditor.js').then(async (component) => {
    await loadScript(JSPYTHON_MODE_URL);
    await loadScript(DATA_PIPE_JS_URL, () => {
      AVAILABLE_PACKAGES['datapipe-js'] = window.dP;
    });
    const langTools = await import('ace-builds/src-min-noconflict/ext-language_tools');
    const interp = await getInterpreter();
    addInterpretersCompleter(langTools, interp);
    return component;
  }),
  { ssr: false }
)

/**
 * Adds interpreters language completer.
 * @param {Object} langTools Ace editor language tools.
 */
function addInterpretersCompleter(langTools, interpreter) {
  const interpreterCompleter = {
    getCompletions: (editor, session, pos, prefix, callback) => {
      const line = editor.session.getLine(pos.row);
      const regexp = `([\\w.]+).${prefix}`;
      const res = line.match(new RegExp(regexp));
      const wordList = interpreter.getAutocompletionList(res ? res[1] : null);
      callback(null, wordList);
    }
  };
  langTools.addCompleter(interpreterCompleter);
}

/**
 * @type {Interpreter}
 * @private
 */
let interpreter = null;

/**
 * Get interpreter instance.
 * @return {Promise<Interpreter>}
 */
function getInterpreter() {
  if (interpreter) {
    return Promise.resolve(interpreter);
  }
  return loadScript(INTERPRETER_CDN_URL, () => {
    interpreter = window.jspython.jsPython();
    interpreter.registerPackagesLoader((packageName) => {
      return AVAILABLE_PACKAGES[packageName];
    });
    return interpreter;
  });
}

/**
 * Loads script.
 * @param {string} url Url to load script
 * @param {Function?} callback Onload callback
 */
function loadScript(url, callback) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = `${url}?v=${Date.now()}`;
    script.onload = () => {
      if (typeof callback === 'function') {
        resolve(callback());
      } else {
        resolve();
      }
    }
    document.head.appendChild(script);
  });
}

const scripts = `
"""|---------------------------------|"""
"""| Welcome My dataPipe playground! |"""
"""|---------------------------------|"""
from datapipe-js import dataPipe

dataPipe([1, 2, 3, 4]).avg()
`;

class Playground extends React.Component {
  constructor(props) {
    super(props);
    this.codeChange = this.codeChange.bind(this);
    this.state = {
      code: scripts,
      result: ''
    };
  }

  codeChange(code) {
    this.setState({ code });
  }

  formatJSON(format = true) {
    const res = this.state.result;
    if (typeof res !== 'string') return;
    try {
      this.error = null;
      if (format) {
        this.setState({
          result: JSON.stringify(JSON.parse(res), null, '\t')
        });
      } else {
        this.setState({
          result: JSON.stringify(JSON.parse(res))
        });
      }
    } catch (e) {
      this.error = e;
    }
  }

  async run() {
    try {
      const interpreter = await getInterpreter();
      const res = await interpreter.evaluate(this.state.code);

      if (res === null || res == undefined) {
        this.setState({ result: '' });
      } else if (['string', 'number', 'boolean'].indexOf(typeof res) >= 0 ) {
        this.setState({ result: res.toString() });
      } else {
        this.setState({ result: JSON.stringify(res, null, 4) });
      }
    } catch (e) {
      this.setState({ result: e.message })
    }
  }
  render() {
    return (
      <Layout title={`JSPython editor`}
        description="JSPython editor">
        <div className={styles.playgroundPage}>
          <ExampleList selectCode={this.codeChange}></ExampleList>
          <div className={"container mainContainer docsContainer " + styles.playgroundContent}>
            <div className={styles.playgroundPageHeader}>
              <h1>JSPython playground</h1>
              <p>Write custom code, use and edit examples. For more advanced experience
                use <a href={ONLINE_EDITOR_URL} target="_blank">Worksheets JSPython Editor</a>&nbsp;or&nbsp;
                <a href={EXTENSION_URL}>Chrome Extensions</a>
                </p>
            </div>
            <div className={styles.editorWrapper}>
              <div className={styles.editorBlock} style={{ marginRight: '1rem'}}>
                <div>
                  <h1 style={{ display: 'inline-block' }}>Code</h1>
                  <button onClick={this.run.bind(this)}
                    className={styles.runBtn + " button button--outline button--primary"}>Run</button>
                </div>
                <JSPythonEditor ref="code" onChange={this.codeChange} value={this.state.code}></JSPythonEditor>
              </div>
              <div className={styles.editorBlock}>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <h1>Result</h1>
                <div>
                  <button className="button button--outline button--primary button--sm"
                    style={{marginRight: '.5rem'}}
                    onClick={this.formatJSON.bind(this, false)}>Minify</button>
                  <button className="button button--outline button--primary button--sm"
                    onClick={this.formatJSON.bind(this, true)}>Format</button>
                </div>
                </div>
                <JSPythonEditor format={true} value={this.state.result}></JSPythonEditor>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default Playground;
