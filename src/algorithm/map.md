# 字典
## 特点
- 与集合类似，字典也是存储唯一值的数据结构，但是以**键值对**的形式来存储。
- ES6中有字典Map：Map翻译过来是映射的意思。
- 字典常用操作：键值对的增删改查。
```js
// 初始化
const m = new Map();
// 增
m.set('a', 'aa');
m.set('b', 'bb');
// 删
m.delete('a');
// 改
m.set('b', 'bbb');
// 全删
m.clear();
```
## Leetcode
### 349. 两个数组的交集
题目链接：[https://leetcode-cn.com/problems/intersection-of-two-arrays/](https://leetcode-cn.com/problems/intersection-of-two-arrays/)

时间复杂度O(N+M)

空间复杂度O(M)
```js
var intersection = function(nums1, nums2) {

    let res = [];
    let map = new Map();

    nums1.forEach(item => {
        map.set(item, true);
    })
    
    nums2.forEach(item => {
        if(map.get(item)) {
            res.push(item);
            map.delete(item)
        }
    })
    
    return res;
};
```
### 1. 两数之和
题目链接：[https://leetcode-cn.com/problems/two-sum/](https://leetcode-cn.com/problems/two-sum/)

时间复杂度O(N)

空间复杂度O(N)
```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = new Map();
    for(let i = 0; i < nums.length; i++){
        const n1 = nums[i];
        const n2 = target - n1;
        if(map.has(n2)) {
            return [map.get(n2), i];
        }else {
            map.set(n1, i);
        }
    }
};
```

### 3. 无重复字符的最长子串
题目链接：[https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/](https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/)
时间复杂度O(N)

空间复杂度O(M)：M是字符串中不重复字符串的个数。

```js
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    
    let l = 0;
    let res = 0;
    let map = new Map();

    for(let r = 0; r < s.length; r++) {
        let str = s[r];
        if(map.has(str) && map.get(str) >= l) {
            l = map.get(str) + 1;
        }
        res = Math.max(res, r - l + 1);
        map.set(str, r)
    }

    return res;

};
```
### 76. 最小覆盖子串
题目链接：[https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/](https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/)

时间复杂度O(M+N),M是t的长度，N是s的长度

空间复杂度O(M),M是t里不同字符的个数
```js
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {

    let l = 0;
    let r= 0;
    let need = new Map();
    let res = '';

    for (let i of t) {
        need.set(i, need.has(i) ? need.get(i) + 1 : 1);
    }
    let needType = need.size;
    while(r < s.length) {

        const c = s[r];

        if(need.has(c)) {
            need.set(c, need.get(c) - 1);
            if(need.get(c) === 0) needType--;
        }

        while(needType === 0) {
            const newRes = s.substring(l, r + 1);
            if(!res || newRes.length < res.length) res = newRes;
            const c2 = s[l];
            if(need.has(c2)) {
                need.set(c2, need.get(c2) + 1);
                if(need.get(c2) === 1) needType++;
            }
            l++;
        }

        r++;
    }
    return res;
};
```
