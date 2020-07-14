---
id: datapipe
title: datapipe
sidebar_label: dataPipe
---

## DataPipe Initialization

### dataPipe
```js
dataPipe(array: any[] = []): DataPipe
```
Creates new data pipe object initialized with values. Returns continuous DataPipe object

### fromCsv
Parses CSV string and load items into DataPipe. 
> Uses [parseCsv](/docs/datapipe-js-utils#parsecsv). Returns continuous DataPipe object

```js
fromCsv(content: string, options?: ParsingOptions): DataPipe
```

### fromTable
Loads dataPipe with Table information.
> Uses [fromTable](/docs/datapipe-js-utils#fromtable). Returns continuous DataPipe object

 * _rowsOrTable_ a datarows with 2 dimentional arrays or entire table. If you provide rows, then you have to specify fieldNames
 * _fieldNames_ fieldNames what correspond to the rows
 * _fieldDataTypes_  fieldNames what correspond to the rows

```js
  fromTable(
    rowsOrTable: PrimitiveType[][] | TableDto,
    fieldNames?: string[],
    fieldDataTypes?: DataTypeName[]
   ): DataPipe
```

## DataPipe Transformation functions

### groupBy
Groups array items based on elementSelector function.

> Uses [groupBy](/docs/datapipe-js-array#groupby) function and returns continuous DataPipe object

```js
groupBy(groupByFields: string | string[] | Selector): DataPipe
```

### pivot
Returns a reshaped array based on unique column values.

> Uses [pivot](/docs/datapipe-js-array#pivot) function and returns continuous DataPipe object

```js
pivot(rowFields: string | string[],columnField: string, dataField: string,
    aggFunction?: (array: any[]) => any | null, columnValues?: string[]): DataPipe
```
 - _rowFields_ row fields (or index fields). It can be one or more field names
 - _columnField_ a field which values will be used to create columns
 - _dataField_ a dataField which will be aggrated with aggregate function and groupped by rows and columns
 - _aggFunction_ an aggregation function. Default value is sum. data field will be aggregated by this function
 - _columnValues_ an optional initial column values. Use it to define a set of columns/values you would expect


### transpose
Returns a transposed array, where rows become columns. 

> Uses [transpose](/docs/datapipe-js-array#transpose) function and returns continuous DataPipe object

```js
transpose(): DataPipe 
```


### select
Creates new array based on selector. 
 - _elementSelector_ A Selector function that is invoked per iteration.

> Uses [select](/docs/datapipe-js-array#select) function and returns continuous DataPipe object

```js
select(selector: string | string[] | Selector): DataPipe
```

### map
Alias for [select](#select) and has same usage

### where
Filters array based on predicate function.
> Uses [where](/docs/datapipe-js-array#where) function and returns continuous DataPipe object

 * _predicate_ A predicate function to filter items.

```js
where(predicate: Predicate): DataPipe
```

### filter
Alias for [where](#where) and has same usage

### flattern

Returns a flaterned array. 
> Uses [flattern](/docs/datapipe-js-array#flattern) function and returns continuous DataPipe object

 * _array_ The array to flatten recursively.
```js
flatten(): DataPipe 
```

### sort
A simple sort array function with a convenient interface.

> Uses [sort](/docs/datapipe-js-array#sort) function and returns continuous DataPipe object

 * _fields_ field names with a sort order.

```js
sort(...fields: string[]): DataPipe
```
**example**
```js 
 sort('name ASC', 'age DESC');
```


### leftJoin
Returns a joined array with all elements from the left array (leftArray), and the matched elements from the right array (rightArray).
The result is NULL from the right side, if there is no match.

> Uses [leftJoin](/docs/datapipe-js-array#leftjoin) function and returns continuous DataPipe object

 * _rightArray_ array for right side in a join
 * _leftKey_ A key from left side array. What can be as a fieldName, multiple fields or key Selector
 * _rightKey_ A key from right side array. what can be as a fieldName, multiple fields or key Selector
 * _resultSelector_ A callback function that returns result value
 */
```js
leftJoin(
    rightArray: any[],
    leftKeySelector:  string | string[] | Selector<any, string>,
    rightKeySelector: string | string[] | Selector<any, string>,
    resultSelector: (leftItem: any, rightItem: any) => any
): DataPipe
```
### innerJoin
Joins two arrays together by selecting elements that have matching values in both arrays.
If there are elements in any array that do not have matches in other array, these elements will not be shown!

> Uses [innerJoin](/docs/datapipe-js-array#innerjoin) function and returns continuous DataPipe object

 * _leftArray_ array for left side in a join  
 * _rightArray_ array for right side in a join
 * _leftKey_ A key from left side array. What can be as a fieldName, multiple fields or key Selector
 * _rightKey_ A key from right side array. what can be as a fieldName, multiple fields or key Selector
 * _resultSelector_ A callback function that returns result value
 */
```js
innerJoin(
    rightArray: any[],
    leftKey: string | string[] | Selector<any, string>,
    rightKey: string | string[] | Selector<any, string>,
    resultSelector: (leftItem: any, rightItem: any) => any
): DataPipe
```

### fullJoin
Returns all elements from the left array (leftArray), and all elements from the right array (rightArray).
The result is NULL from the right/left side, if there is no match.

> Uses [fullJoin](/docs/datapipe-js-array#fulljoin) function and returns continuous DataPipe object

 * _rightArray_ array for right side in a join
 * _leftKey_ A key from left side array. What can be as a fieldName, multiple fields or key Selector
 * _rightKey_ A key from right side array. what can be as a fieldName, multiple fields or key Selector
 * _resultSelector_ A callback function that returns result value
 */

```js
fullJoin(
    rightArray: any[],
    leftKey: string | string[] | Selector<any, string>,
    rightKey: string | string[] | Selector<any, string>,
    resultSelector: (leftItem: any, rightItem: any) => any
): DataPipe 
```

### merge
Merges elements from two arrays. It appends source element or overrides to target array based on matching keys provided.

> Uses [merge](/docs/datapipe-js-array#merge) function and returns continuous DataPipe object

 * _sourceArray_ source array
 * _targetKey_ tartget key field, arry of fields or field serlector
 * _sourceKey_ source key field, arry of fields or field serlector

```js
merge(
    sourceArray: any[],
    targetKey: string | string[] | Selector<any, string>,
    sourceKey: string | string[] | Selector<any, string>
): DataPipe
```

## Aggregation and stats functions

### sum
Sum of items in array. 

> Uses [sum](/docs/datapipe-js-array#sum) function. This method stops DataPipe's continuity and returns result value

 * _elementSelector_ Function invoked per iteration.

```js
sum(field?: Selector | string): number | null
```


### avg
Average of array items.

> Uses [avg](/docs/datapipe-js-array#avg) function. This method stops DataPipe's continuity and returns result value

 * _elementSelector_ Function invoked per iteration.

```js 
avg(field?: Selector | string): number | null
```

### average
Alias for [avg](#avg) and has same usage

### min
Computes the minimum value of array.
 * _elementSelector_ Function invoked per iteration.

> Uses [min](/docs/datapipe-js-array#min) function. This method stops DataPipe's continuity and returns result value

```js
min(field?: Selector | string): number | Date | null
```

### max
Computes the maximum value of array.
 * _elementSelector_ Function invoked per iteration.

> Uses [max](/docs/datapipe-js-array#max) function. This method stops DataPipe's continuity and returns result value

```js
max(field?: Selector | string): number | Date | null
```

### count 
Count of elements in array with optional predicate.
 * _predicate_ Predicate function invoked per iteration.
 
> Uses [count](/docs/datapipe-js-array#count) function. This method stops DataPipe's continuity and returns result value

```js 
count(predicate?: Predicate): number | null 
```

### first
Gets first item in array that satisfies optional predicate.
 * _predicate_ Predicate function invoked per iteration.

> Uses [first](/docs/datapipe-js-array#first) function. This method stops DataPipe's continuity and returns result value

```js
first(predicate?: Predicate): T | null 
```

### last
Gets last item in array that satisfies optional predicate.
 * _predicate_ Predicate function invoked per iteration.

> Uses [last](/docs/datapipe-js-array#last) function. This method stops DataPipe's continuity and returns result value

```js
last(predicate?: Predicate): T | null 
```

### countBy
Gets counts map of values returned by `elementSelector`.

 * _elementSelector_ Function invoked per iteration.

> Uses [countBy](/docs/datapipe-js-array#countby) function. This method stops DataPipe's continuity and returns result value

```js 
countBy(elementSelector: Selector): Record<string, number>
```

### mean

Get mean of an array.
 * _field_ Property name or Selector function invoked per iteration.

> Uses [mean](/docs/datapipe-js-array#mean) function. This method stops DataPipe's continuity and returns result value

```js 
mean(field?: Selector | string): number | null 
```

### quantile
Get quantile of a sorted array.

 * _field_ Property name or Selector function invoked per iteration.
 * _p_ quantile.

> Uses [quantile](/docs/datapipe-js-array#quantile) function. This method stops DataPipe's continuity and returns result value

```js
quantile(p: number, field?: Selector | string): number | null
```

### variance

Get sample variance of an array.
 * _field_ Property name or Selector function invoked per iteration.

> Uses [variance](/docs/datapipe-js-array#variance) function. This method stops DataPipe's continuity and returns result value

```js
variance(field?: Selector | string): number | null
```

### stdev
Get the sample standard deviation of an array.
 * _field_ Property name or Selector function invoked per iteration.

> Uses [stdev](/docs/datapipe-js-array#stdev) function. This method stops DataPipe's continuity and returns result value

```js
stdev(field?: Selector | string): number | null
```
### median
Get median of an array.
 * _field_ Property name or Selector function invoked per iteration.

> Uses [median](/docs/datapipe-js-array#quantile) function. This method stops DataPipe's continuity and returns result value

```js
median(array: any[], field?: Selector | string): number | null 
```

## DataPipe output

### toArray

Returns a result as an array and stops DataPipe continuity

```js
toArray(): any[]
```

### toCsv

Returns a result as CSV and stops DataPipe continuity.

> It uses [toCsv](/docs/datapipe-js-utils#tocsv)

```js
 toCsv(delimiter = ','): string
```

### toObject

Returns a result as JS Object and stops DataPipe continuity.

 * _keyField_ a key selector represented as a string (field name) or array of stringa (fieldNames) or custom selectors

> It uses [toObject](/docs/datapipe-js-utils#toobject)

```js
toObject(keyField: string | string[] | Selector<any, string>): Record<string, any>
```

### toTable

Returns a result as TableDto and stops DataPipe continuity.

> It uses [toTable](/docs/datapipe-js-utils#totable)

```js
toTable(): TableDto
```

## DataType other methods 

### tap

This method allows you to examine a a state of the data during pipe execution.

```js
tap(dataFunc: (d: any[]) => void): DataPipe 
```