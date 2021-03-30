# 堆
## 相关概念
- 完全二叉树：每层节点都填满，最后一层虽然没填满但只缺右节点。
- 最大堆就是父节点都大于等于子节点。
- 最小堆就是父节点都小于等于子节点。
## 特点
- 堆是一种特殊的完全二叉树
- 所有的节点都大于等于（最大堆）或小于等于（最小堆）它的子节点
- JS中通常用数组来表示堆
    - 左侧子节点的位置是`2*index+1`
    - 右侧子节点的位置是`2*index+2`
    - 父节点位置是`(index-1)/2`
## 堆的应用
- 堆能高效、快速地找出最大值和最小值，时间复杂度O(N)
- 找出第K个最大（小）元素
- **第K个最大**元素
    1. 构建一个**最小堆**，并将元素依次插入堆中
    2. 当堆容量超过K就删除堆顶
    3. 插入结束后，堆顶就是第K个最大元素
- 如果找**第K个最小**元素就构建一个**最大堆**

### 最小堆类
- 在类里，声明一个数组，来装元素
- 主要方法：
    - 插入
    - 删除堆顶
    - 获取堆顶
    - 获取堆大小
### 插入
1. 将值插入堆的底部，即数组的尾部
2. 然后**上移**：将值与它的父节点进行交换，直到父节点小于等于这个插入的值
3. 大小为k的堆中插入元素的时间复杂度O(logk) 
### 删除堆顶
1. 用数组尾部元素替换堆顶（直接删除堆顶会破坏堆结构）
2. 然后**下移**：将新堆顶和它的子节点进行交换，直到子节点大于等于这个新堆顶
3. 大小为k的堆中删除堆顶的时间复杂度为O(logk)
### 获取堆顶和堆的大小
- 获取堆顶：返回数组的头部
- 获取堆大小：返回数组的长度
```js
class MinHeap {
    constructor () {
        this.heap = [];
    }
    getParentIndex (i) {
        return (i - 1) >> 1;
    }
    getLeftIndex (i) {
        return i * 2 + 1;
    }
    getRightIndex (i) {
        return i * 2 + 2;
    }
    swap(i1, i2) {
        const val1 = this.heap[i1];
        const val2 = this.heap[i2];
        [this.heap[i1], this.heap[i2]] = [val2, val1];
    }
    shiftUp (index) {
        if(index == 0) return;
        const parentIndex = this.getParentIndex(index);
        if(this.heap[parentIndex] > this.heap[index]) {
            this.swap(parentIndex, index);
            this.shiftUp(parentIndex)
        }
    }
    shiftDown (index) {
        const leftIndex = this.getLeftIndex(index);
        const rightIndex = this.getRightIndex(index);
        if(this.heap[leftIndex] < this.heap[index]) {
            this.swap(leftIndex, index);
            this.shiftDown(leftIndex);
        }
        if(this.heap[rightIndex] < this.heap[index]) {
            this.swap(rightIndex, index);
            this.shiftDown(rightIndex);
        }
    }
    insert (value) {
        this.heap.push(value);
        this.shiftUp(this.heap.length - 1)
    }
    pop () {
        this.heap[0] = this.heap.pop();
        this.shiftDown(0);
    }
    peek () {
        return this.heap[0];
    }
    size () {
        return this.heap.length;
    }
}
const h = new MinHeap();
h.insert(3);
h.insert(2);
h.insert(1);
h.pop();
```