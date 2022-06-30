class ListNode {
  public val: number;
  public next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export class MyLinkedList {
  private size: number;
  private head: ListNode | null;
  private tail: ListNode | null;
  constructor() {
    this.size = 0;
    this.head = null;
    this.tail = null;
  }

  getNode(index: number): ListNode | null {
    let curNode: ListNode = new ListNode(0, this.head);
    for (let i = 0; i <= index; i++) {
      curNode = curNode.next!;
    }
    return curNode;
  }

  get(index: number): number {
    if (index < 0 || index >= this.size) {
      return -1;
    }
    let cur = this.getNode(index);
    return cur.val;
  }

  addAtHead(val: number): void {
    let node = new ListNode(val, this.head);
    this.head = node;
    if (!this.tail) {
      this.tail = node;
    }
    this.size++;
  }

  addAtTail(val: number): void {
    let node = new ListNode(val, null);
    if (this.tail) {
      this.tail.next = node;
    } else {
      // 还没有尾节点，说明一个节点都没有
      this.head = node;
    }
    this.tail = node;
    this.size++;
  }

  addAtIndex(index: number, val: number): void {
    if (index === this.size) {
      this.addAtTail(val);
      return;
    }
    if (index > this.size) {
      return;
    }
    if (index <= 0) {
      this.addAtHead(val);
      return;
    }

    // 正常情况
    let curNode = this.getNode(index - 1);
    let node = new ListNode(val, curNode.next);
    curNode.next = node;
    this.size++;
  }

  deleteAtIndex(index: number): void {
    if (index < 0 || index >= this.size) {
      return;
    }
    if (index === 0) {
      this.head = this.head!.next;
      if (index === this.size - 1) {
        this.tail = null;
      }
      this.size--;
      return;
    }

    let curNode: ListNode = this.getNode(index - 1);
    curNode.next = curNode.next!.next;

    if (index === this.size - 1) {
      this.tail = curNode;
    }
    this.size--;
  }
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
