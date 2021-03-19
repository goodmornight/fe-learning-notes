# 树
## 特点
- 一种分层数据的抽象模型
- 前端中常见树：DOM树、级联选择、树形控件
- JS中没有树，但可以用Object和Array构建
- 树的常用操作：
    - 深度/广度优先遍历
    - 先中后序遍历
## 遍历
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