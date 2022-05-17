/**
 * sort 排序
 * @desc 时间复杂度 O(n) 空间复杂度 O(1)
 * @param nums {number[]}
 * @param k {number}
 * @returns {number}
 */
export function findKthLargest(nums: number[], k: number): number {
  nums.sort((a, b) => b - a);
  return nums[k - 1];
}

/**
 * 快速排序
 * @desc 时间复杂度 O(n) 空间复杂度 O(logn)
 * @param nums {number[]}
 * @param k {number}
 * @returns {number}
 */
export function findKthLargest2(nums: number[], k: number): number {
  const len = nums.length;
  const targetIdx = len - k;
  let left = 0,
    right = len - 1;

  while (left < right) {
    const index = partition(nums, left, right);
    if (index === targetIdx) {
      return nums[index];
    } else if (index < targetIdx) {
      left = index + 1;
    } else {
      right = index - 1;
    }
  }

  return nums[left];
}

function partition(nums: number[], left: number, right: number) {
  const povit = nums[left];
  while (left < right) {
    while (left < right && nums[right] >= povit) {
      right--;
    }
    nums[left] = nums[right];

    while (left < right && nums[left] < povit) {
      left++;
    }
    nums[right] = nums[left];
  }

  nums[left] = povit;

  return left;
}
