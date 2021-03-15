# 队列
## 特点
- **先进先出**
- JS里没有队列，可以使用Array实现队列所有功能
- 队列的常用操作：
    - 进：`push`
    - 出：`shift`
## 应用场景
先进先出场景都可使用队列来解决。
- JS异步中的任务队列
- 计算最近请求次数
### JS异步中的任务队列
- JS是单线程，无法同时处理异步中的并发任务
- 使用任务队列先后处理异步任务

## Leetcode
### 933. 最近的请求次数
题目链接：[https://leetcode-cn.com/problems/number-of-recent-calls/](https://leetcode-cn.com/problems/number-of-recent-calls/)
时间复杂度O(N)
空间复杂度O(N)
```
var RecentCounter = function() {
    this.q = [];
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
    this.q.push(t)
    while(this.q[0] < t - 3000) {
        this.q.shift();
    }
    return this.q.length;
};

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
```