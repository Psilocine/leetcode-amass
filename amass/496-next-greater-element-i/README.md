# 496. 下一个更大元素 I

> 难度：简单
>
> https://leetcode.cn/problems/next-greater-element-i/

## 题目

nums1  中数字  x  的 下一个更大元素 是指  x  在  nums2 中对应位置 右侧 的 第一个 比  x  大的元素。

给你两个 没有重复元素 的数组  nums1 和  nums2 ，下标从 0 开始计数，其中 nums1  是  nums2  的子集。

对于每个 0 <= i < nums1.length ，找出满足 nums1[i] == nums2[j] 的下标 j ，并且在 nums2 确定 nums2[j] 的 下一个更大元素 。如果不存在下一个更大元素，那么本次查询的答案是 -1 。

返回一个长度为  nums1.length 的数组 ans 作为答案，满足 ans[i] 是如上所述的 下一个更大元素 。

**示例 1**

```
输入：nums1 = [4,1,2], nums2 = [1,3,4,2].
输出：[-1,3,-1]
解释：nums1 中每个值的下一个更大元素如下所述：
- 4 ，用加粗斜体标识，nums2 = [1,3,4,2]。不存在下一个更大元素，所以答案是 -1 。
- 1 ，用加粗斜体标识，nums2 = [1,3,4,2]。下一个更大元素是 3 。
- 2 ，用加粗斜体标识，nums2 = [1,3,4,2]。不存在下一个更大元素，所以答案是 -1 。
```

**示例 2**

```
输入：nums1 = [2,4], nums2 = [1,2,3,4].
输出：[3,-1]
解释：nums1 中每个值的下一个更大元素如下所述：
- 2 ，用加粗斜体标识，nums2 = [1,2,3,4]。下一个更大元素是 3 。
- 4 ，用加粗斜体标识，nums2 = [1,2,3,4]。不存在下一个更大元素，所以答案是 -1 。
```

提示：

- 1 <= nums1.length <= nums2.length <= 1000
- 0 <= nums1[i], nums2[i] <= 10^4
- nums1 和 nums2 中所有整数 互不相同
- nums1 中的所有整数同样出现在 nums2 中

进阶：你可以设计一个时间复杂度为 O(nums1.length + nums2.length) 的解决方案吗？

## 解答

```typescript
/**
 * 单调栈 + 哈希表
 * @desc 时间复杂度 O(m + n) 空间复杂度 O(n) m 为 nums1 的长度
 * @param nums1 {number[]}
 * @param nums2 {number[]}
 * @returns {number[]}
 */
export function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
  const map: Map<number, number> = new Map();

  const stack: number[] = [];

  for (let i = 0; i < nums2.length; i++) {
    while (stack.length && nums2[i] > nums2[stack[stack.length - 1]]) {
      const index = stack.pop();
      map.set(nums2[index], nums2[i]);
    }
    stack.push(i);
  }

  let ans: number[] = [];

  for (let i = 0; i < nums1.length; i++) {
    ans.push(map.get(nums1[i]) || -1);
  }

  return ans;
}
```
