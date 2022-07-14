/**
 * 两队列模拟
 */
export class MyStack {
  private queue: number[];
  private _queue: number[];
  constructor() {
    this.queue = [];
    this._queue = [];
  }

  push(x: number): void {
    this.queue.push(x);
  }

  pop(): number {
    if (!this.queue.length) {
      [this.queue, this._queue] = [this._queue, this.queue];
    }
    while (this.queue.length > 1) {
      this._queue.push(this.queue.shift());
    }
    return this.queue.shift();
  }

  top(): number {
    const ans = this.pop();
    this.push(ans);
    return ans;
  }

  empty(): boolean {
    return !this.queue.length && !this._queue.length;
  }
}
