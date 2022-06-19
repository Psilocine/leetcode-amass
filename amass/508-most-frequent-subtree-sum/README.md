# 508. 出现次数最多的子树元素和

> 难度：中等
>
> https://leetcode.cn/problems/most-frequent-subtree-sum/

## 题目

给你一个二叉树的根结点  root ，请返回出现次数最多的子树元素和。如果有多个元素出现的次数相同，返回所有出现次数最多的子树元素和（不限顺序）。

一个结点的  「子树元素和」  定义为以该结点为根的二叉树上所有结点的元素之和（包括结点本身）。

**示例 1**

![image](https://user-images.githubusercontent.com/25545052/174482737-9ea2b4fe-8ba3-42dd-9155-1180bb71af81.png)

```
输入: root = [5,2,-3]
输出: [2,-3,4]
```

**示例  2**

![image](https://user-images.githubusercontent.com/25545052/174482740-e56d7ef8-4291-4f53-9733-07cf2c055ab2.png)

```
输入: root = [5,2,-5]
输出: [2]
```

## 解答

```typescript
/**
 * dfs + 遍历
 * @desc 时间复杂度 O(n) 空间复杂度 O(n)
 * @param root {TreeNode | null}
 * @returns {number[]}
 */
export function findFrequentTreeSum(root: TreeNode | null): number[] {
  const map: Map<number, number> = new Map();

  const ans: number[] = [];
  let max = -Infinity;
  const postorder = (root) => {
    if (!root) {
      return 0;
    }

    const l = postorder(root.left);
    const r = postorder(root.right);

    const sum = l + r + root.val;

    map.set(sum, (map.get(sum) || 0) + 1);
    max = Math.max(max, map.get(sum));

    return sum;
  };

  postorder(root);

  for (let [key, value] of map) {
    if (value === max) {
      ans.push(key);
    }
  }

  return ans;
}
```
