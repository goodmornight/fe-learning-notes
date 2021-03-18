# 链表
## 特点
- 多个元素组成的列表
- 元素存储不连续，通过next指针连在一起
- JS中没有链表，可以使用Object模拟链表

### 数组于链表
- 数组：增删非首尾元素往往需要移动元素。
- 链表：增删非首尾元素时，不需要移动元素，只需要改next指向即可。

## 应用场景
- JS中的原型链
### 原型链
- 原型链的本质是链表
- 原型链上的节点是各种原型对象：`Function.prototype`、`Object.prototype`
- 原型链通过`__prototype__`属性连接各种原型对象

## Leetcode
经典面试题：
- 链表访问
- 链表反转
- 链表节点删除
### 链表访问

#### 141. 环形链表
题目链接：[https://leetcode-cn.com/problems/linked-list-cycle/](https://leetcode-cn.com/problems/linked-list-cycle/)

- 思路1:使用哈希表(额外的存储区)存储已经遍历过的节点
- 思路2:双指针做法
    - 使用快慢指针，快指针一次向前2个节点 慢指针一次向前1个节点
    - 有环的链表中，快指针和慢指针最终一定会在环中相遇
    - 无环的链表中，快指针会率先访问到链表尾 从而终结检测过程

时间复杂度O(N)
空间复杂度O(1)
```
var hasCycle = function(head) {
    let p1 = head;
    let p2 = head;
    while(p1 && p2 && p2.next) {
        p1 = p1.next;
        p2 = p2.next.next;
        if(p1 === p2) {
            return true;
        }
    }
    return false;
};
```

#### 2. 两数相加
题目链接：[https://leetcode-cn.com/problems/add-two-numbers/](https://leetcode-cn.com/problems/add-two-numbers/)

时间复杂度O(N)：两个链表长度的较大值

空间复杂度O(N)：两个链表长度的较大值或较大值+1
```javascript
var addTwoNumbers = function(l1, l2) {
    let l3 = new ListNode();
    let p1 = l1;
    let p2 = l2;
    let p3 = l3;
    let carry = 0;

    while(p1 || p2) {
        const v1 = p1 ? p1.val: 0;
        const v2 = p2 ? p2.val: 0;
        const val = v1 + v2 + carry;

        carry = Math.floor(val / 10)
        p3.next = new ListNode(val % 10)

        if(p1) p1 = p1.next;
        if(p2) p2 = p2.next;
        p3 = p3.next;
    }

    if(carry) p3.next = new ListNode(carry);

    return l3.next;
};
```

### 链表反转

#### 206.反转链表
题目链接：[https://leetcode-cn.com/problems/reverse-linked-list/](https://leetcode-cn.com/problems/reverse-linked-list/)

时间复杂度O(N)

空间复杂度O(1)
```
var reverseList = function(head) {
    let p1 = head;
    let p2 = null;
    while (p1) {
        let tmp = p1.next;
        p1.next = p2;
        p2 = p1;
        p1 = tmp;
    }
    return p2;
};
```

### 链表节点删除

#### 237.删除链表中的节点
题目链接：[https://leetcode-cn.com/problems/delete-node-in-a-linked-list/](https://leetcode-cn.com/problems/delete-node-in-a-linked-list/)

时间复杂度O(1)

空间复杂度O(1)
```
var deleteNode = function(node) {
    node.val = node.next.val;
    node.next = node.next.next;
};
```
#### 83. 删除排序链表中的重复元素
题目链接：[https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list/](https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list/)

时间复杂度O(N)

空间复杂度O(1)：没有添加新的
```
var deleteDuplicates = function(head) {
    let p = head;
    while(p && p.next) {
        if(p.val === p.next.val) {
            p.next = p.next.next;
        } else {
            p = p.next;
        }
    }
    return head;
};
```
