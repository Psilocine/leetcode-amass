/**
 * 暴力破解法
 * @desc 时间复杂度 O(n) 空间复杂度 O(1)
 * @param nums {number[]}
 * @param target {number}
 * @returns {number[]}
 */
export function searchRange(nums: number[], target: number): number[] {
  let len = nums.length;
  if (len < 1) return [-1, -1];
  if (len === 1) {
    return nums[0] === target ? [0, 0] : [-1, -1];
  }

  for (let i = 0; i < len; i++) {
    if (nums[i] === target) {
      let j = i;
      while(nums[j + 1] === nums[i]) {
        j += 1;
      }
      return [i, j];
    }

  }

  return [-1, -1];
}

/**
 * 二分法
 * @desc 时间复杂度 O(logn) 空间复杂度 O(1)
 * @param nums {number[]}
 * @param target {number}
 * @returns {number[]}
 */
export function searchRange2(nums: number[], target: number): number[] {
  let ans = [-1, -1];

  const leftIdx = binarySearchLeft(nums, target);
  const rightIdx = binarySearchRight(nums, target);

  if (leftIdx <= rightIdx && rightIdx < nums.length && nums[leftIdx] === target && nums[rightIdx] === target) {
    ans = [leftIdx, rightIdx]
  }

  return ans;
}

function binarySearchLeft(nums, target): number {
  let left = -1;
  let right = nums.length;

  while(left + 1 !== right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] >= target) {
      right = mid
    } else {
      left = mid;
    }
  }
  return right;
}
function binarySearchRight(nums, target): number {
  let left = -1;
  let right = nums.length;
  while(left + 1 !== right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] > target) {
      right = mid;
    } else {
      left = mid;
    }
  }
  return left;
}