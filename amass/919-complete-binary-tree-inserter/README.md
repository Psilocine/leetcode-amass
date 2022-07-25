# 919. 完全二叉树插入器

> 难度：中等
>
> https://leetcode.cn/problems/complete-binary-tree-inserter/

## 题目

完全二叉树 是每一层（除最后一层外）都是完全填充（即，节点数达到最大）的，并且所有的节点都尽可能地集中在左侧。

设计一种算法，将一个新节点插入到一个完整的二叉树中，并在插入后保持其完整。

实现 CBTInserter 类:

- CBTInserter(TreeNode root)  使用头节点为  root  的给定树初始化该数据结构；
- CBTInserter.insert(int v)  向树中插入一个值为  Node.val == val 的新节点  TreeNode。使树保持完全二叉树的状态，并返回插入节点  TreeNode  的父节点的值；
- CBTInserter.get_root() 将返回树的头节点。

**示例 1**

![image](https://user-images.githubusercontent.com/25545052/180815166-6f29cc84-a999-4b91-b6e0-5b2dd62019e6.png)

```
输入
["CBTInserter", "insert", "insert", "get_root"]
[[[1, 2]], [3], [4], []]
输出
[null, 1, 2, [1, 2, 3, 4]]

解释
CBTInserter cBTInserter = new CBTInserter([1, 2]);
cBTInserter.insert(3);  // 返回 1
cBTInserter.insert(4);  // 返回 2
cBTInserter.get_root(); // 返回 [1, 2, 3, 4]
```

提示：

- 树中节点数量范围为  [1, 1000]
- 0 <= Node.val <= 5000
- root  是完全二叉树
- 0 <= val <= 5000
- 每个测试用例最多调用  insert  和  get_root  操作  10^4  次

## 解答

```typescript
/**
 * BFS
 * @desc 时间复杂度 O(n) 空间复杂度 O(n)
 */
export class CBTInserter {
  private list: TreeNode[] = new Array<TreeNode>();
  private idx: number = 0;
  constructor(root: TreeNode | null) {
    this.list.push(root);
    let cur = 0;
    while (cur < this.list.length) {
      const node = this.list[cur];
      if (node.left !== null) this.list.push(node.left);
      if (node.right !== null) this.list.push(node.right);
      cur++;
    }
  }

  insert(val: number): number {
    const node = new TreeNode(val);
    while (
      this.list[this.idx].left !== null &&
      this.list[this.idx].right !== null
    )
      this.idx++;
    const fa = this.list[this.idx];
    if (fa.left === null) fa.left = node;
    else if (fa.right === null) fa.right = node;
    this.list.push(node);
    return fa.val;
  }

  get_root(): TreeNode | null {
    return this.list[0];
  }
}
```
