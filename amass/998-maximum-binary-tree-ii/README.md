# 998. 最大二叉树 II

> 难度：中等
>
> https://leetcode.cn/problems/maximum-binary-tree-ii/

## 题目

最大树 定义：一棵树，并满足：其中每个节点的值都大于其子树中的任何其他值。

给你最大树的根节点 root 和一个整数 val 。

就像 之前的问题 那样，给定的树是利用 Construct(a)  例程从列表  a（root = Construct(a)）递归地构建的：

如果 a 为空，返回  null 。
否则，令  a[i] 作为 a 的最大元素。创建一个值为  a[i]  的根节点 root 。
root  的左子树将被构建为  Construct([a[0], a[1], ..., a[i - 1]]) 。
root  的右子树将被构建为  Construct([a[i + 1], a[i + 2], ..., a[a.length - 1]]) 。
返回  root 。
请注意，题目没有直接给出 a ，只是给出一个根节点  root = Construct(a) 。

假设 b 是 a 的副本，并在末尾附加值 val。题目数据保证 b 中的值互不相同。

返回  Construct(b) 。

**示例 1**

![image](https://user-images.githubusercontent.com/25545052/187642550-6122abb9-13e3-418c-882f-110ed05652d2.png)

```
输入：root = [4,1,3,null,null,2], val = 5
输出：[5,4,null,1,3,null,null,2]
解释：a = [1,4,2,3], b = [1,4,2,3,5]
```

**示例 2**

![image](https://user-images.githubusercontent.com/25545052/187642555-ececd561-25c1-4964-9b3a-10b37e72dd65.png)

```
输入：root = [5,2,4,null,1], val = 3
输出：[5,2,4,null,1,null,3]
解释：a = [2,1,5,4], b = [2,1,5,4,3]
```

**示例 3**

![image](https://user-images.githubusercontent.com/25545052/187642560-b4636286-bcef-4dac-8490-674c571a211b.png)

```
输入：root = [5,2,3,null,1], val = 4
输出：[5,2,4,null,1,3]
解释：a = [2,1,5,3], b = [2,1,5,3,4]
```

提示：

- 树中节点数目在范围 [1, 100] 内
- 1 <= Node.val <= 100
- 树中的所有值 互不相同
- 1 <= val <= 100

## 解答

```typescript
/**
 * 还原中序递归 再构造
 * @desc 时间复杂度 O(n) 空间复杂度 O(n)
 * @param root {TreeNode | null}
 * @param val {number}
 * @returns {TreeNode | null}
 */
export function insertIntoMaxTree(
  root: TreeNode | null,
  val: number
): TreeNode | null {
  // 中序遍历
  const res: number[] = [];
  const recover = (node) => {
    if (!node) {
      return;
    }

    recover(node.left);
    res.push(node.val);
    recover(node.right);
  };

  recover(root);
  // [1,4,2,3]
  res.push(val);
  // [1,4,2,3,5]

  const deep = (nums) => {
    if (!nums.length) return null;

    const max = Math.max(...nums);
    const idx = nums.indexOf(max);

    const node = new TreeNode(max);
    node.left = deep(nums.slice(0, idx));
    node.right = deep(nums.slice(idx + 1));

    return node;
  };

  return deep(res);
}

/**
 * 递归 dfs
 * @desc 时间复杂度 O(n) 空间复杂度 O(n)
 * @param root {TreeNode | null}
 * @param val {number}
 * @returns {TreeNode | null}
 */
export function insertIntoMaxTree2(
  root: TreeNode | null,
  val: number
): TreeNode | null {
  const node = new TreeNode(val);
  if (!root) return node;

  if (root.val < val) {
    node.left = root;
    return node;
  } else {
    root.right = insertIntoMaxTree2(root.right, val);
    return root;
  }
}

/**
 * 迭代
 * @desc 时间复杂度 O(n) 空间复杂度 O(n)
 * @param root {TreeNode | null}
 * @param val {number}
 * @returns {TreeNode | null}
 */
export function insertIntoMaxTree3(
  root: TreeNode | null,
  val: number
): TreeNode | null {
  const node = new TreeNode(val);
  let prev = null,
    cur = root;
  while (cur !== null && cur.val > val) {
    prev = cur;
    cur = cur.right;
  }

  if (prev === null) {
    node.left = root;
    return node;
  } else {
    prev.right = node;
    node.left = cur;
    return root;
  }
}
```
