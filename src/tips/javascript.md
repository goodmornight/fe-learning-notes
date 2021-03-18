# 排序
要比较数字而非字符串，比较函数可以简单的以 a 减 b，如下的函数将会将数组升序排列
```js
function compareNumbers(a, b) {
  return a - b;
}
```