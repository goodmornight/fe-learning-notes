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