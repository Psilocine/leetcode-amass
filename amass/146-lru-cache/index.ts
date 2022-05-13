export class LRUCache {
  private capacity: number;
  private map: Map<number, number>;
  constructor(capacity: number) {
    this.map = new Map();
    this.capacity = capacity;
  }

  get(key: number): number {
    if (this.map.has(key)) {
      let value = this.map.get(key);
      // 先删再 set，相当于更新到 map 最后一位
      this.map.delete(key);
      this.map.set(key, value);
      return value;
    } else {
      return -1;
    }
  }

  put(key: number, value: number): void {
    // 如果已有，要更新，先删后 set
    if (this.map.has(key)) {
      this.map.delete(key);
    }
    this.map.set(key, value);

    // put 后判断是否超载
    if (this.map.size > this.capacity) {
      this.map.delete(this.map.keys().next().value);
    }
  }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
