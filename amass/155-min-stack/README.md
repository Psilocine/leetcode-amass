# 155. 最小栈

> 难度：简单
>
> https://leetcode-cn.com/problems/min-stack/

## 题目

设计一个支持 `push`，`pop`，`top` 操作，并能在常数时间内检索到最小元素的栈。

实现 `MinStack` 类:

- MinStack() 初始化堆栈对象。
- void push(int val) 将元素val推入堆栈。
- void pop() 删除堆栈顶部的元素。
- int top() 获取堆栈顶部的元素。
- int getMin() 获取堆栈中的最小元素。

**示例 1**

```
输入：
["MinStack","push","push","push","getMin","pop","top","getMin"]
[[],[-2],[0],[-3],[],[],[],[]]

输出：
[null,null,null,null,-3,null,0,-2]

解释：
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin();   --> 返回 -3.
minStack.pop();
minStack.top();      --> 返回 0.
minStack.getMin();   --> 返回 -2.
```

`pop`、`top` 和 `getMin` 操作总是在 **非空栈** 上调用

## 解答
```typescript
/**
 * 题目要求常数时间内检索到最小元素，如何设计 getMin 是本题的重点
 * 
 * 如果不使用额外空间的话，可以 push 的时候同时把最小值存入
 * 缺点是要在 pop 方法执行的时候重新获取最小值
 * @desc 各方法时间复杂度 O(1) 空间复杂度 O(n)
 */
export class MinStack {
  private stack: number[];
  private minStack: number[];
  constructor() {
    this.stack = [];
    this.minStack = [Infinity];
  }

  push(val: number): void {
    this.stack.push(val);
    // 每次 push 与栈顶的最小值进行比较，较小的入栈
    this.minStack.push(Math.min(this.minStack[this.minStack.length - 1], val));
  }

  pop(): void {
    this.stack.pop();
    this.minStack.pop();
  }

  top(): number {
    return this.stack[this.stack.length - 1];
  }

  getMin(): number {
    return this.minStack[this.minStack.length - 1];
  }
}
```