---
id: datapipe-js-utils
title: datapipe-js/utils
sidebar_label: datapipe-js/utils
---

### parseCsv

Parse Csv format into array of items. It automatically recognizes Dates, numbers and booleans. Also, provides number of other options to skip values converts etc

```js
parseCsv(content: string, options?: ParsingOptions): ScalarObject[] 
```

### parseCsvToTable

Parse Csv format into tables of string values. It does not resolves any types, but it provides suggestions. All other features like skipWhile, take while works well there

```js
parseCsvToTable(content: string, options?: ParsingOptions): StringsDataTable
```

### toCsv
Converts aray to the delimiter (comma) separated value

```js
toCsv(array: ScalarObject[], delimiter = ','): string
```

### fromTable
Converts rows and columns to a list of ScalarObjects.
 * _rowsOrTable_ Table data or Array of values .
 * _fieldNames_ Column names. If not provided then, it will be auto generated
 * _fieldDataTypes_ Column names

```js
fromTable(rowsOrTable: PrimitiveType[][] | TableDto, fieldNames?: string[],
  fieldDataTypes?: DataTypeName[]): ScalarObject[] 
```

### toTable

Converts an array of ScalarObjects into the table. An efficient format to transfer over the wire

 * _values_ an array of ScalarObjects

```js 
toTable(values: ScalarObject[]): TableDto
```

### toObject
Converts array of items to the object map. Where key selector can be defined.
 * _array_ array to be converted
 * _keyField_ a key field selected

```js
toObject(array: any[], keyField: string | string[] | Selector<any, string>): Record<string, any>
```

### parseDatetimeOrNull
Parses string to the Date or returns null. It is more efficient parser than new Date() and works better with UK date format
 * _value_ value to parse
```js
parseDatetimeOrNull(value: string | Date): Date | null
```

### parseNumberOrNull
Parses string to the number or returns null. It is more efficient parser than standard (parseFloat) and parses numbers like 1,000.32 
 * _value_ value to parse
```js
parseNumberOrNull(value: string | Number): Number | null
```

### parseBooleanOrNull
Parses string to the boolean or returns null. It is treating `['1', 'yes', 'true', 'on']` as true and `['0', 'no', 'false', 'off']` as false
 * _value_ value to parse
```js
parseBooleanOrNull(value: string | Boolean): Boolean | null
```

### dateToString

Converts Date (or Date with time) to the ISO string with TimeZone trick. Usually it should be used before sending to the server

```js
dateToString(d: Date): string
```

### deepClone

Returns a deep copy of your object or array.


```js
deepClone(obj: any): any
```