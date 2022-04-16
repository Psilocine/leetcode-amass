/**
 * 题目要求常数时间内检索到最小元素，如何设计 getMin 是本题的重点
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

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
