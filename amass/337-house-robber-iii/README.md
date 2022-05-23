# 337. 打家劫舍 III

> 难度：中等
>
> https://leetcode.cn/problems/house-robber-iii/

## 题目

小偷又发现了一个新的可行窃的地区。这个地区只有一个入口，我们称之为  `root` 。

除了 `root` 之外，每栋房子有且只有一个“父“房子与之相连。一番侦察之后，聪明的小偷意识到“这个地方的所有房屋的排列类似于一棵二叉树”。 如果 **两个直接相连的房子在同一天晚上被打劫** ，房屋将自动报警。

给定二叉树的  `root` 。返回 **在不触动警报的情况下** ，小偷能够盗取的最高金额。

**示例 1**

![image](https://user-images.githubusercontent.com/25545052/169263346-ba27cce1-d393-4a4c-85eb-f9f1824e1a67.png)

```
输入: root = [3,2,3,null,3,null,1]
输出: 7
解释: 小偷一晚能够盗取的最高金额 3 + 3 + 1 = 7
```

**示例 2**

![image](https://user-images.githubusercontent.com/25545052/169263364-a7655306-8ac3-46dd-9cfc-952e40d1bde6.png)

```
输入: root = [3,4,5,1,3,null,1]
输出: 9
解释: 小偷一晚能够盗取的最高金额 4 + 5 = 9
```

## 解答

```typescript
/**
 * 动态规划
 * @desc 时间复杂度 O() 空间复杂度 O()
 * @param root {TreeNode | null}
 * @returns {number}
 */
export function rob(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }
  // 后序
  const traverse = (root) => {
    if (!root) {
      return [0, 0];
    }

    const l = traverse(root.left);
    const r = traverse(root.right);

    const ans = new Array(2).fill(0);
    // 选择当前节点
    ans[0] = root.val + l[1] + r[1];
    // 不选节点
    // ans[1] = Math.max(l[0] + r[0], l[1] + r[1], l[1] + r[0], l[0] + r[1]);
    ans[1] = Math.max(l[0], l[1]) + Math.max(r[0], r[1]);
    return ans;
  };

  const ans = traverse(root);
  return Math.max(...ans);
}

```
