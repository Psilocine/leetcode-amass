# 297. 二叉树的序列化与反序列化

> 难度：困难
>
> https://leetcode.cn/problems/serialize-and-deserialize-binary-tree/

## 题目

序列化是将一个数据结构或者对象转换为连续的比特位的操作，进而可以将转换后的数据存储在一个文件或者内存中，同时也可以通过网络传输到另一个计算机环境，采取相反方式重构得到原数据。

请设计一个算法来实现二叉树的序列化与反序列化。这里不限定你的序列 / 反序列化算法执行逻辑，你只需要保证一个二叉树可以被序列化为一个字符串并且将这个字符串反序列化为原始的树结构。

提示: 输入输出格式与 LeetCode 目前使用的方式一致，详情请参阅  [LeetCode 序列化二叉树的格式](https://leetcode.cn/faq/#binary-tree)。你并非必须采取这种方式，你也可以采用其他的方法解决这个问题。

**示例 1**

![image](https://user-images.githubusercontent.com/25545052/168810821-e7c9aae5-d728-4fe8-9dc9-30e4e0bbb0bf.png)

```
输入：root = [1,2,3,null,null,4,5]
输出：[1,2,3,null,null,4,5]
```

**示例 2**

```
输入：root = []
输出：[]
```

**示例 3**

```
输入：root = [1]
输出：[1]
```

**示例 4**

```
输入：root = [1,2]
输出：[1,2]
```

## 解答

```typescript
/**
 * dfs 递归
 * @desc 时间复杂度 O(n) 空间复杂度 O(n)
 */
export function serialize(root: TreeNode | null): string {
  if (root === null) {
    return "null";
  }
  const left: string = serialize(root.left);
  const right: string = serialize(root.right);

  return `${root.val},${left},${right}`;
}

export function deserialize(data: string): TreeNode | null {
  const list = data.split(",");

  const buildTree = (list: string[]) => {
    const rootVal: string = list.shift();
    if (rootVal === "null") {
      return null;
    }
    const root: TreeNode = new TreeNode(Number(rootVal));
    root.left = buildTree(list);
    root.right = buildTree(list);

    return root;
  };

  return buildTree(list);
}

/**
 * bfs 队列
 * @desc 时间复杂度 O(n) 空间复杂度 O(n)
 */
export function serialize2(root: TreeNode | null): string {
  if (root === null) {
    return "null";
  }

  const ans: string[] = [];
  const queue: TreeNode[] | null[] = [root];
  while (queue.length) {
    const n = queue.length;
    for (let i = 0; i < n; i++) {
      const node = queue.shift();
      if (node) {
        ans.push(`${node.val}`);
        queue.push(node.left);
        queue.push(node.right);
      } else {
        ans.push("null");
      }
    }
  }
  return ans.toString();
}

export function deserialize2(data: string): TreeNode | null {
  if (data === "null") return null;
  const list = data.split(",");

  const root = new TreeNode(Number(list[0]));
  const queue = [root];
  let cursor = 1;

  while (cursor < list.length) {
    const node = queue.shift();

    const leftVal = list[cursor];
    const rightVal = list[cursor + 1];

    if (leftVal !== "null") {
      const leftNode = new TreeNode(Number(leftVal));

      node.left = leftNode;
      queue.push(leftNode);
    }
    if (rightVal !== "null") {
      const rightNode = new TreeNode(Number(rightVal));

      node.right = rightNode;
      queue.push(rightNode);
    }

    cursor += 2;
  }

  return root;
}
```
