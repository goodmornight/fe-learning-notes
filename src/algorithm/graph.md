# 图
## 特点
- 图是网络结构的抽象模型，是一组由边连接的节点
- 图可以表示任何二元关系，比如道路、航班。（一条线只能连2个点，所以是二元关系）
- JS中没有图，可以用Object和Array构建图
- 图的表示法：邻接矩阵、邻接表、关联矩阵
- 常用操作：
    - 深度优先遍历：尽可能深的搜索图的分支
    - 广度优先遍历：先访问离根节点最近的节点
```js
// graph.js
const graph = {
    0: [1, 2],
    1: [2],
    2: [0, 3],
    3: [3]
}
module.exports = graph;
```
### 深度优先遍历口诀

- 访问根节点
- 对根节点的没访问过的相邻节点挨个进行深度优先遍历

```js
// dfs.js
const graph = require('./graph');

const visited = new Set();
const dfs = (n) => {
    console.log(n);
    visited.add(n);
    graph[n].forEach(node => {
        if(!visited.has(node)) dfs(node)
    })
}
dfs(2);
```

### 广度优先遍历口诀
- 1. 新建一个队列，把根节点入队
- 2. 把队头出队并访问
- 3. 把队头的没访问过的相邻节点入队
- 4. 重复二三步，直到队空

```js
// bfs.js
const graph = require('./graph');

const visited = new Set();
const q = [];
visited.add(2)
q.push(2)

while(q.length) {
    let n = q.shift();
    console.log(n);
    graph[n].forEach(item=>{
        if(!visited.has(item)) {
            visited.add(item);
            q.push(item)
        }
    })
}
```
## Leetcode
### 65. 有效数字
### 417. 太平洋大西洋水流问题
### 133. 克隆图