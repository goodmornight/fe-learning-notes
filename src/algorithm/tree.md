# 树
## 特点
- 一种分层数据的抽象模型
- 前端中常见树：DOM树、级联选择、树形控件
- JS中没有树，但可以用Object和Array构建
- 树的常用操作：
    - 深度/广度优先遍历
    - 先中后序遍历
## 深度/广度优先遍历
### 深度优先遍历DFS
尽可能深的搜索树的分支

口诀：

- 1. 访问根节点
- 2. 对根节点的children挨个访问
```js
const tree = {
    val: 'a',
    children: [{
        val: 'b',
        children: [{
            val: 'd',
            children: []
        }, {
            val: 'e',
            children: []
        }]
    }, {
        val: 'c',
        children: [{
            val: 'f',
            children: []
        }, {
            val: 'g',
            children: []
        }]
    }]
}

const dfs = (root) => {
    console.log(root.val);
    root.children.forEach(dfs);
}

dfs(tree);
```
### 广度优先遍历BFS
先访问离根节点最近的节点

口诀：

- 1. 新建一个队列，把根节点入队
- 2. 把队头出队并访问
- 3. 把队头的children挨个入队
- 4. 重复第2、3步，直到队列为空

```JS
const tree = {
    val: 'a',
    children: [{
        val: 'b',
        children: [{
            val: 'd',
            children: []
        }, {
            val: 'e',
            children: []
        }]
    }, {
        val: 'c',
        children: [{
            val: 'f',
            children: []
        }, {
            val: 'g',
            children: []
        }]
    }]
}

const bfs = (root) => {
    const queue = [root];
    while(queue.length > 0) {
        let node = queue.shift();
        console.log(node.val);
        node.children.forEach(item => {
            queue.push(item);
        })
    }
}
bfs(tree);
```
## 二叉树
- 树中每个节点最多只能有两个子节点
- 在JS中通常用Object来模拟二叉树
## 先序遍历
口诀：
- 访问**根**节点
- 对根节点的**左**子树进行先序遍历
- 对根节点的**右**子树进行先序遍历
```JS
// 递归版
const preorder = (root) => {
    if(!root) return;
    console.log(root.val);
    preorder(root.left)
    preorder(root.right)
}
// 非递归
const preorder = function (root) {
    if(!root) return;
    let stack = [root];
    while(stack.length){
        const n = stack.pop();
        console.log(n.val);
        if(n.right) stack.push(n.right);
        if(n.left) stack.push(n.left);
    }
}
```
## 中序遍历
口诀：
- 对根节点的**左**子树进行中序遍历
- 访问**根**节点
- 对根节点的**右**子树进行中序遍历
```js
// 递归版
const inorder = (root) => {
    if(!root) return;
    inorder(root.left)
    console.log(root.val);
    inorder(root.right)
}
// 非递归
const inorder = function (root) {
    if(!root) return;
    let stack = [];
    let p = root;
    while(stack.length || p) {
        while(p) {
            stack.push(p);
            p = p.left;
        }
        const n = stack.pop();
        console.log(n.val);
        p = n.right;
    }
}
```

## 后序遍历
口诀：
- 对根节点的**左**子树进行后序遍历
- 对根节点的**右**子树进行后序遍历
- 访问**根**节点
```js
// 递归版
const postorder = (root) => {
    if(!root) return;
    postorder(root.left);
    postorder(root.right);
    console.log(root.val);
}
// 非递归：先序遍历反过来
const postorder = function (root) {
    if(!root) return;
    let stack = [root];
    let outputStack = [];
    while(stack.length){
        const n = stack.pop();
        outputStack.push(n);
        if(n.left) stack.push(n.left);
        if(n.right) stack.push(n.right);
    }
    while(outputStack.length) {
        const n = outputStack.pop();
        console.log(n.val);
    }
}
```
## 场景
### 前端与树：遍历 JSON 的所有节点值
```js
const json = {
    a: { b: { c: 1 } },
    d: [0, 1]
}

const dfs = (n, path) => {
    console.log(n, path);
    Object.keys(n).forEach(i => {
        dfs(n[i], path.concat(i));
    })
}
dfs(json, [])
```
## Leetcode
### 104. 二叉树的最大深度
题目链接：[https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/](https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/)
```js
// 深度遍历
var maxDepth = function(root) {
    let res = 0;
    const dfs = function (root, l) {
        if(!root) return;
        if(!root.left && !root.right) {
            res = Math.max(res, l);
        }
        dfs(root.left, l + 1);
        dfs(root.right, l + 1);
    }
    dfs(root, 1);
    return res;
};
// 递归
var maxDepth = function(root) {
    if(!root) return 0;
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
};
```
### 111. 二叉树的最小深度
题目链接：[https://leetcode-cn.com/problems/minimum-depth-of-binary-tree/](https://leetcode-cn.com/problems/minimum-depth-of-binary-tree/)

时间复杂度O(N)

空间复杂度O(N)
```js
var minDepth = function(root) {
    if(!root) return 0;
    let q = [[root, 1]];
    while(q.length) {
        const [n, l] = q.shift();
        if(!n.left && !n.right) return l;
        if(n.left) q.push([n.left, l + 1]);
        if(n.right) q.push([n.right, l + 1]);
    }
};
```
时间复杂度O(N)

空间复杂度O(N)
```js
var minDepth = function(root) {
    if(!root) return 0;
    if(!root.left) {
        return minDepth(root.right) + 1;
    } else if(!root.right) {
        return minDepth(root.left) + 1;
    } else {
        return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
    }
};
```

### 102. 二叉树的层序遍历
题目链接：[https://leetcode-cn.com/problems/binary-tree-level-order-traversal/](https://leetcode-cn.com/problems/binary-tree-level-order-traversal/)
方法一
```JS
var levelOrder = function(root) {
    if(!root) return [];
    let q = [[root, 0]];
    let res = [];
    while(q.length) {
        const [n, l] = q.shift();
        if (!res[l]) {
            res.push([n.val])
        } else {
            res[l].push(n.val)
        }
        if(n.left) q.push([n.left, l + 1]);
        if(n.right) q.push([n.right, l + 1]);
    }
    return res;
};
```
方法二

时间复杂度O(N)

空间复杂度O(N)

```JS
var levelOrder = function(root) {
    if(!root) return [];
    let q = [root];
    let res = [];
    while(q.length) {
        let len = q.length;
        res.push([])
        while(len--) {
            const n = q.shift();
            res[res.length-1].push(n.val);
            if(n.left) q.push(n.left);
            if(n.right) q.push(n.right);
        }
        
    }
    return res;
};
```

### 94. 二叉树的中序遍历
题目链接：[https://leetcode-cn.com/problems/binary-tree-inorder-traversal/](https://leetcode-cn.com/problems/binary-tree-inorder-traversal/)

时间复杂度：O(N)

空间复杂度：O(N)

```js
var inorderTraversal = function(root) {
    let res = [];
    const rec = (n) => {
        if(!root) return;
        if(n.left) rec(n.left);
        res.push(n.val);
        if(n.right) rec(n.right);
    }
    rec(root);
    return res;
};
```

```js
var inorderTraversal = function(root) {
    let res = [];
    let stack = [];
    let p = root;
    while(stack.length || p) {
        while(p) {
            stack.push(p);
            p = p.left;
        }
        const n = stack.pop();
        res.push(n.val);
        p = n.right;
    }
    return res;
};
```
### 112. 路径总和
题目链接：[https://leetcode-cn.com/problems/path-sum/](https://leetcode-cn.com/problems/path-sum/)

时间复杂度O(N)

空间复杂度：最好的时候O(logN)，最差的时候O(N)

```JS
var hasPathSum = function(root, targetSum) {
    if(!root) return false;
    let res = false;
    const dfs = (n, s) => {
        if (!n.left && !n.right && s==targetSum) {
            res = true;
        }
        if(n.left) dfs(n.left, s + n.left.val);
        if(n.right) dfs(n.right, s + n.right.val);
    }
    dfs(root, root.val);
    return res;
};
```
