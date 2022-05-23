/**
 * 暴力破解
 * @desc 时间复杂度 O(n ^ 2) 空间复杂度 O(1)
 * @param nums {number[]}
 * @returns {number}
 */
export function findDuplicate(nums: number[]): number {
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (nums[i] === nums[j]) {
        return nums[i];
      }
    }
  }
}

/**
 * 二分搜索
 * @desc 时间复杂度 O(nlogn) 空间复杂度 O(1)
 * @param nums {number[]}
 * @returns {number}
 */
export function findDuplicate2(nums: number[]): number {
  const n = nums.length;
  let left = 1;
  let right = n - 1;
  while (left < right) {
    let mid = Math.floor((right + left) / 2);

    let cnt = 0;
    for (const num of nums) {
      if (num <= mid) {
        cnt += 1;
      }
    }

    // 根据抽屉原理，小于等于 4 的个数如果严格大于 4 个，此时重复元素一定出现在 [1..4] 区间里
    if (cnt > mid) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left;
}

/**
 * 快慢指针
 * @desc 时间复杂度 O(n) 空间复杂度 O(1)
 * @param nums {number[]}
 * @returns {number}
 */
export function findDuplicate3(nums: number[]): number {
  let slow = 0,
    fast = 0;
  do {
    slow = nums[slow];
    fast = nums[nums[fast]];
  } while (slow !== fast);
  slow = 0;
  while (fast !== slow) {
    slow = nums[slow];
    fast = nums[fast];
  }

  return slow;
}
