/**
 * 排序
 * @desc 时间复杂度 O(nlogn) 空间复杂度 O(n)
 * @param nums {number[]}
 * @returns {number}
 */
export function findUnsortedSubarray(nums: number[]): number {
  // 排序升序的情况
  if (isSorted(nums)) {
    return 0;
  }
  const n = nums.length;
  const arr = [...nums].sort((a, b) => a - b);

  let left = 0;
  let right = n - 1;
  while (nums[left] === arr[left]) {
    left++;
  }

  while (nums[right] === arr[right]) {
    right--;
  }

  return right - left + 1;
}

function isSorted(nums: number[]): boolean {
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < nums[i - 1]) {
      return false;
    }
  }
  return true;
}

/**
 * 双指针
 * @desc 时间复杂度 O(n) 空间复杂度 O(1)
 * @param nums {number[]}
 * @returns {number}
 */
export function findUnsortedSubarray2(nums: number[]): number {
  const n = nums.length;
  if (n === 1) {
    return 0;
  }
  let begin = -1;
  let end = -1;
  let min = nums[n - 1];
  let max = nums[0];
  for (let i = 0; i < n; i++) {
    if (nums[i] < max) {
      end = i;
    } else {
      max = nums[i];
    }

    if (nums[n - i - 1] > min) {
      begin = n - i - 1;
    } else {
      min = nums[n - i - 1];
    }
  }

  return end === -1 ? 0 : end - begin + 1;
}
