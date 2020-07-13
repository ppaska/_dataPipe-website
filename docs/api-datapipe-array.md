---
id: datapipe-js-array
title: datapipe-js/array
sidebar_label: datapipe-js/array
---

## Data Transformation functions

### groupBy
```js
groupBy(array: any[], groupByFields: string | string[] | Selector): any[]
```
Groups array items based on elementSelector function

### pivot
Returns a reshaped array based on unique column values.
```js
pivot(array: any, rowFields: string | string[],columnField: string, dataField: string,
    aggFunction?: (array: any[]) => any | null, columnValues?: string[]): any[]
```

 - _array_ array to pivot
 - _rowFields_ row fields (or index fields). It can be one or more field names
 - _columnField_ a field which values will be used to create columns
 - _dataField_ a dataField which will be aggrated with aggregate function and groupped by rows and columns
 - _aggFunction_ an aggregation function. Default value is sum. data field will be aggregated by this function
 - _columnValues_ an optional initial column values. Use it to define a set of columns/values you would expect


### transpose
Returns a transposed array, where rows become columns
```js
transpose(data: any[]): any[] 
```


### select
Creates new array based on selector.
 - _array_ The array to process.
 - _elementSelector_ A Selector function that is invoked per iteration.

```js
select(data: any[], selector: string | string[] | Selector): any[] 
```

### map
Alias for [select](#select) and has same usage

### where
Filters array based on predicate function.

 * _array_ The array to process.
 * _predicate_ A predicate function to filter items.

```js
where(data: any[], predicate: Predicate): any[]
```

### filter
Alias for [where](#where) and has same usage

### flattern

Returns a flatern array.
 * _array_ The array to flatten recursively.
```js
flatten(array: any[]): any[] 
```

**Example**
```js
flatten([1, 4, [2, [5, 5, [9, 7]], 11], 0]); // length 9
```

### sort
A simple sort array function with a convenient interface

 * _array_ The array to process.
 * _fields_ field names with a sort order.

```js
sort(array: any[], ...fields: string[]): any[]
```
**example**
```js 
 sort(array, 'name ASC', 'age DESC');
```


### leftJoin
Returns a joined array with all elements from the left array (leftArray), and the matched elements from the right array (rightArray).
The result is NULL from the right side, if there is no match.
 * _leftArray_ array for left side in a join  
 * _rightArray_ array for right side in a join
 * _leftKey_ A key from left side array. What can be as a fieldName, multiple fields or key Selector
 * _rightKey_ A key from right side array. what can be as a fieldName, multiple fields or key Selector
 * _resultSelector_ A callback function that returns result value
 */
```js
leftJoin(
    leftArray: any[],
    rightArray: any[],
    leftKeySelector:  string | string[] | Selector<any, string>,
    rightKeySelector: string | string[] | Selector<any, string>,
    resultSelector: (leftItem: any, rightItem: any) => any
): any[]
```
### innerJoin
Joins two arrays together by selecting elements that have matching values in both arrays.
If there are elements in any array that do not have matches in other array, these elements will not be shown!
 * _leftArray_ array for left side in a join  
 * _rightArray_ array for right side in a join
 * _leftKey_ A key from left side array. What can be as a fieldName, multiple fields or key Selector
 * _rightKey_ A key from right side array. what can be as a fieldName, multiple fields or key Selector
 * _resultSelecto_r A callback function that returns result value
 */
```js
innerJoin(
    leftArray: any[],
    rightArray: any[],
    leftKey: string | string[] | Selector<any, string>,
    rightKey: string | string[] | Selector<any, string>,
    resultSelector: (leftItem: any, rightItem: any) => any
): any[]
```

### fullJoin
Returns all elements from the left array (leftArray), and all elements from the right array (rightArray).
The result is NULL from the right/left side, if there is no match.
 * _leftArray_ array for left side in a join  
 * _rightArray_ array for right side in a join
 * _leftKey_ A key from left side array. What can be as a fieldName, multiple fields or key Selector
 * _rightKey_ A key from right side array. what can be as a fieldName, multiple fields or key Selector
 * _resultSelector_ A callback function that returns result value
 */

```js
fullJoin(
    leftArray: any[],
    rightArray: any[],
    leftKey: string | string[] | Selector<any, string>,
    rightKey: string | string[] | Selector<any, string>,
    resultSelector: (leftItem: any, rightItem: any) => any
): any[] 
```

### merge
Merges elements from two arrays. It appends source element or overrides to target array based on matching keys provided
 * _targetArray_ target array
 * _sourceArray_ source array
 * _targetKey_ tartget key field, arry of fields or field serlector
 * _sourceKey_ source key field, arry of fields or field serlector

```js
merge(
    targetArray: any[],
    sourceArray: any[],
    targetKey: string | string[] | Selector<any, string>,
    sourceKey: string | string[] | Selector<any, string>
): any[]
```

## Aggregation and stats functions

### sum
Sum of items in array.

 * _array_ The array to process.
 * _elementSelector_ Function invoked per iteration.

```js
sum(array: any[], field?: Selector | string): number | null
```

**example**
```js
sum([1, 2, 5]); // 8
sum([{ val: 1 }, { val: 5 }], i => i.val); // 6
```

### avg
Average of array items.
 * _array_ The array to process.
 * _elementSelector_ Function invoked per iteration.

```js 
avg(array: any[], field?: Selector | string): number | null
```

### average
Alias for [average](#avg) and has same usage

### min
Computes the minimum value of array.
 * _array_ The array to process.
 * _elementSelector_ Function invoked per iteration.

```js
min(array: any[], field?: Selector | string): number | Date | null
```

### max
Computes the maximum value of array.
 * _array_ The array to process.
 * _elementSelector_ Function invoked per iteration.

```js
max(array: any[], field?: Selector | string): number | Date | null
```

### count 
Count of elements in array with optional predicate.
 * _array_ The array to process.
 * _predicate_ Predicate function invoked per iteration.
 
```js 
count(array: any[], predicate?: Predicate): number | null 
```

### first
Gets first item in array that satisfies optional predicate.
 * _array_ The array to process.
 * _predicate_ Predicate function invoked per iteration.

```js
first<T = any>(array: T[], predicate?: Predicate): T | null 
```

### last
Gets last item in array that satisfies optional predicate.
 * _array_ The array to process.
 * _predicate_ Predicate function invoked per iteration.

```js
last<T = any>(array: T[], predicate?: Predicate): T | null 
```

### countBy
Gets counts map of values returned by `elementSelector`.

 * _array_ The array to process.
 * _elementSelector_ Function invoked per iteration.

```js 
countBy(array: any[], elementSelector: Selector): Record<string, number>
```

### mean

Get mean of an array.
 * _array_ The array to process.
 * _field_ Property name or Selector function invoked per iteration.

```js 
mean(array: any[], field?: Selector | string): number | null 
```

### quantile
Get quantile of a sorted array.

 * _array_ The array to process.
 * _field_ Property name or Selector function invoked per iteration.
 * _p_ quantile.

```js
quantile(array: any[], p: number, field?: Selector | string): number | null
```

### variance

Get sample variance of an array.
 * _array_ The array to process.
 * _field_ Property name or Selector function invoked per iteration.

```js
variance(array: any[], field?: Selector | string): number | null
```

### stdev
Get the sample standard deviation of an array.
 * _array_ The array to process.
 * _field_ Property name or Selector function invoked per iteration.

```js
stdev(array: any[], field?: Selector | string): number | null
```
### median
Get median of an array.
 * _array_ The array to process.
 * _field_ Property name or Selector function invoked per iteration.

```js
median(array: any[], field?: Selector | string): number | null 
```
