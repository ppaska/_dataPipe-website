---
title: A quick example
description: Usage examples
published: true
---

## A quick example
JavaScript / TypeScript
```js
import { dataPipe } from 'datapipe-js';
import * as dpString from 'datapipe-js/string';
import * as dpUtils from 'datapipe-js/utils';
import * as dpArray from 'datapipe-js/array';

const data = [
  { name: "John",  country: "US"}, { name: "Joe", country: "US"}, { name: "Bill",  country: "US"},
  { name: "Adam", country: "UK"}, { name: "Scott", country: "UK"}, { name: "Diana",country: "UK"},
  { name: "Marry",country: "FR"}, { name: "Luc",country: "FR"}
];

const summaryForUS = dataPipe(data)
  .groupBy(i => i.country)
  .select(g => 
    r = {
      country: dataPipe(g).first().country,
      names: dataPipe(g).map(r => r.name).join(", "),
      count: dataPipe(g).count()
    };
    return r
  )
  .where(r => r.country != "US")
  .toArray();
  
  console.log(summaryForUS);
```

[JSPython](https://jspython.dev) inside [Worksheet Systems](https://worksheet.systems) Application.
```py
from datapipe-js import dataPipe
from datapipe-js-array import first, sum

data = [
  { name: "John",  country: "US"}, { name: "Joe", country: "US"}, { name: "Bill",  country: "US"}, { name: "Adam", country: "UK"}, 
  { name: "Scott", country: "UK"}, { name: "Diana",country: "UK"}, { name: "Marry",country: "FR"}, { name: "Luc",country: "FR"}
]

summaryForUS = dataPipe(data)
  .groupBy(i => i.country)
  .select(g => 
    r = {
      country: dataPipe(g).first().country,
      names: dataPipe(g).map(r => r.name).join(", "),
      count: dataPipe(g).count()
    }
    return r
  )
  .where(r => r.country != "US")
  .toArray()
 
 print(summaryForUS)

```
