# 栈

## 特点

- **后进先出**
- JS中没有栈，但可以用Array实现栈的所有功能。
- 栈的常用操作：
    - 进栈：`push`
    - 出栈：`pop`
    - 最后一个值：`stack[stack.length - 1]`


## 应用场景
- 十进制转二进制
- 判断字符串括号是否有效
- 函数调用堆栈：可以使用断点查看函数中堆栈CALL STACK

一般很少在工作中使用栈控制JS解释器。

**所有只要用到后进先出的场景的都是可以用栈来解决的。**

## Leetcode
### 20.有效的括号
题目链接：[https://leetcode-cn.com/problems/valid-parentheses/](https://leetcode-cn.com/problems/valid-parentheses/)

时间复杂度O(N)
空间复杂度O(N)

```js
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    const obj = {
        "(": ")",
        "{": "}",
        "[": "]"
    }
    for(let ele of s) {
        if(ele in obj) {
            stack.push(ele)
        } else {
            if(ele !== obj[stack.pop()]) return false; 
        }
    }
    return !stack.length;
};
```

### 144. 二叉树的前序遍历
题目链接：[https://leetcode-cn.com/problems/binary-tree-preorder-traversal/](https://leetcode-cn.com/problems/binary-tree-preorder-traversal/)

时间复杂度O(N)：使用了一个循环，每个节点访问一遍
空间复杂度O(N)：这个栈最大可能把所有的都压进去。

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {

    let res = [];
    let stack = [];

    if(root) stack.push(root);

    while(stack.length){
        let n = stack.pop()
        res.push(n.val)
        if(n.right) stack.push(n.right)
        if(n.left) stack.push(n.left)
    }

    return res
};
```