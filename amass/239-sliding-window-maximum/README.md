# 239. 滑动窗口最大值

> 难度：困难
>
> https://leetcode.cn/problems/sliding-window-maximum/

## 题目

给你一个整数数组 `nums`，有一个大小为  `k`  的滑动窗口从数组的最左侧移动到数组的最右侧。你只可以看到在滑动窗口内的 `k` 个数字。滑动窗口每次只向右移动一位。

返回 **滑动窗口中的最大值** 。

**示例 1**

```
输入：nums = [1,3,-1,-3,5,3,6,7], k = 3
输出：[3,3,5,5,6,7]
解释：
滑动窗口的位置                最大值
---------------               -----
[1  3  -1] -3  5  3  6  7       3
 1 [3  -1  -3] 5  3  6  7       3
 1  3 [-1  -3  5] 3  6  7       5
 1  3  -1 [-3  5  3] 6  7       5
 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7
```

**示例 2**

```
输入：nums = [1], k = 1
输出：[1]
```

提示：

- 1 <= nums.length <= 105
- -104 <= nums[i] <= 104
- 1 <= k <= nums.length

## 解答

```typescript
/**
 * 单调队列
 * @desc 时间复杂度 O(n) 空间复杂度 O(n)
 * @param nums {number[]}
 * @param k {number}
 * @returns {number[]}
 */
export function maxSlidingWindow(nums: number[], k: number): number[] {
  if (nums.length < 2) return nums;

  const ans: number[] = new Array(nums.length - k + 1).fill(0);

  const queue = [];

  for (let i = 0; i < nums.length; i++) {
    // 球队清理
    while (queue.length && nums[i] >= nums[queue[queue.length - 1]]) {
      queue.pop();
    }
    // 尾部入列
    queue.push(i);
    // 头部出列
    while (queue[0] <= i - k) {
      queue.shift();
    }

    if (i - k + 1 >= 0) ans[i - k + 1] = nums[queue[0]];
  }

  return ans;
}
```
