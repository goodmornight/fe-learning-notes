# 集合
## 特点
- 无序且唯一的数据结构
- ES6中有集合Set
- 集合常用操作：
    - 去重
    - 判断某元素是否在集合中、求交集

```js
// 去重
const arr1 = [1, 1, 2]
const set1 = [...new Set(arr1)]

// 判断元素是否在集合中
const arr2 = new Set([1, 2, 3]);
const isHas = arr2.has(2);

// 交集
const arr3 = new Set([1, 2]);
const arr4 = [...arr2].filter(item => arr3.has(item));
console.log(arr4);
```
- `Set`操作：
    - `new`
    - `add`
    - `delete`
    - `has`
    - `size`
- 迭代`Set`：
    - 多种迭代方法
    - Set与Array互转
    - 求交集/差集
```js
let mySet = new Set();
// 添加
mySet.add(1);
mySet.add(2);
mySet.add(5);
mySet.add(5);
// 删除
mySet.delete(2);
// 判断是否存在
let isHas = mySet.has(1);
// set大小
let size = mySet.size;
// 遍历(set的value和key是相同的)
for(let i of mySet.keys()){
    console.log(i)
}

for(let i of mySet.values()){
    console.log(i)
}

for(let [key, value] of mySet.entries()){
    console.log(key,value)
}
// set转array
let myArr = Array.from(mySet);
// array转set
let newSet = new Set([1,2,4,3]);

let mySet2 = new Set([1,2,3,4,5]);
// 并集
let intersection = new Set([...mySet].filter(item => mySet2.has(item)));
// 差集：交集-并集
let difference = new Set([...mySet,...mySet2].filter(item => !intersection.has(item)));
console.log(intersection)
console.log(difference)
```

## Leetcode
### LeetCode：349. 两个数组的交集
题目链接：[https://leetcode-cn.com/problems/intersection-of-two-arrays/](https://leetcode-cn.com/problems/intersection-of-two-arrays/)

时间复杂度O(N^2)

空间复杂度O(N)

```js
var intersection = function(nums1, nums2) {
    return [...new Set(nums1)].filter(n => nums2.includes(n))
};
```