# 排序

## 冒泡排序
*（最简单的排序，性能不好，工作中不会用）*
### 思路
- 比较所有相邻的元素，如果第一个比第二个大，则交换它们
- 一轮下来保证最后一个数是最大的
- 执行n-1轮就可以完成排序
时间复杂度O(N^2)
```javascript
Array.prototype.bubbleSort = function () {
    for(let i = 0; i < this.length - 1; i++) {
        for(let j = 0; j < this.length - 1 - i; j++) {
            if(this[j] > this[j + 1]) {
                [this[j], this[j + 1]] = [this[j + 1], this[j]]
            }
        }
    }
}
// 测试
const res = [7, 8, 3, 4, 5].bubbleSort();
```

## 选择排序
*（性能不太好，工作中一般不会用到但简单）*
### 思路
- 找到数组中最小值，选中它并将其放置第一位
- 找到第二小的值，选中它并将其放置第二位
- 以此类推，执行n-1轮
时间复杂度O(N^2)
```javascript
// 升序
Array.prototype.selectionSort = function () {
    for(let i = 0; i < this.length - 1; i++) {
        let minIdx = i;
        for(let j = i + 1; j < this.length; j++) {
            if(this[j] < this[minIdx]) {
                minIdx = j;
            }
        }
        if(minIdx !== i) { // 如果最小值是它的下标就不用换了
            [this[i], this[minIdx]] = [this[minIdx], this[i]];
        }
    }
}
// 测试
const res = [7, 8, 3, 4, 5].selectionSort();
```

## 插入排序
### 思路
- 从第二个数开始往前比
- 比它大就往后排
- 以此类推进行到最后一个数
时间复杂度O(N^2)
```javascript
// 升序
Array.prototype.insertionSort = function () {
    for(let i = 1; i < this.length; i++) {
        let temp = this[i];
        for(let j = i; j < this.length; j--) {
            if(this[j - 1] > temp) {
                this[j] = this[j - 1];
            } else {
                this[j] = temp;
                break;
            }
        }
    }
    
}
// 测试
const res = [7, 8, 3, 4, 5].insertionSort();
console.log(res)
```

## 归并排序
比之前的排序都要好
是可以用在实战里的，火狐浏览器sort方法用的就是归并排序
### 思路
- 分：把数组劈成两半，再递归地对子数组进行“分”操作，直到分成一个个单独的数
- 合：把两个数合并为有序数组，再对有序数组进行合并，直到全部子数组合并为一个完整数组
- 合并两个有序数组：
    - 新建一个空数组res，用于存放最终排序后的数组
    - 比较两个有序数组的头部，较小者出队并推入res中
    - 如果两个数组还有值，就重复第二步
时间复杂度O(logN)
```javascript
// 升序
Array.prototype.mergeSort = function () {
    const rec = (arr) => {
        if(arr.length === 1) return arr;
        const mid = Math.floor(arr.length / 2);
        const left = arr.slice(0, mid);
        const right = arr.slice(mid, arr.length);
        const orderLeft = rec(left);
        const orderRight = rec(right);
        const res = [];
        while(orderLeft.length || orderRight.length) {
            if(orderLeft.length && orderRight.length) {
                res.push(orderLeft[0] < orderRight[0] ? orderLeft.shift() : orderRight.shift());
            } else if(orderLeft.length) {
                res.push(orderLeft.shift())
            } else if(orderRight.length) {
                res.push(orderRight.shift())
            }
        }
        
        return res;
    }
    const res = rec(this);
    res.forEach((n, i) => {this[i] = n;})
}
// 测试
const res = [7, 8, 3, 4, 5].mergeSort();
```

## 快速排序
### 思路
- 分区：从数组中任意选择一个“基准”，所有比基准小的元素放在基准前面，比基准大的元素放在基准的后面
- 递归：递归对基准前后的子数组进行分区
### 时间复杂度
- 递归的时间复杂度O(logN)
- 分区操作的时间复杂度O(N)
- 时间复杂度：O(NlogN)
```javascript
// 升序
Array.prototype.quickSort = function () {
    const rec = (arr) => {
       if(arr.length <= 1) { return arr; }
       const left = [];
       const right = [];
       const mid = arr[0];
       for(let i = 1; i < arr.length; i++) {
           if(arr[i] < mid) {
               left.push(arr[i]);
           } else {
               right.push(arr[i]);
           }
       }
       return [...rec(left), mid, ...rec(right)];
    }
    const res = rec(this);
    res.forEach((n, i) => {this[i] = n;});
}
// 测试
const res = [7, 8, 3, 4, 5].quickSort();
```