/**
 * 单指针
 * 两次遍历
 * 第一次把所有的 0 交换到头部
 * 第二次从当前头部的索引开始，把所有的 1 交换到头部
 * @desc 时间复杂度 O(n) 空间复杂度 O(1)
 * @param nums {number[]}
 * @returns {number[]}
 */
export function sortColors(nums: number[]): number[] {
  let point = 0;
  let n = nums.length;
  let temp;
  for (let i = 0; i < n; i++) {
    if (nums[i] === 0) {
      temp = nums[i];
      nums[i] = nums[point];
      nums[point] = temp;
      point++;
    }
  }

  for (let i = point; i < n; i++) {
    if (nums[i] === 1) {
      temp = nums[i];
      nums[i] = nums[point];
      nums[point] = temp;
      point++;
    }
  }

  return nums;
}

/**
 * 双指针
 * 一次遍历
 * p0 从头部开始 记录 0
 * p1 从头部开始 记录 1
 * @desc 时间复杂度 O(n) 空间复杂度 O(1)
 * @param nums {number[]}
 * @returns {number[]}
 */
export function sortColors2(nums: number[]): number[] {
  let p0 = 0;
  let p1 = 0;
  let n = nums.length;
  for (let i = 0; i < n; i++) {
    if (nums[i] === 1) {
      [nums[i], nums[p1]] = [nums[p1], nums[i]];
      p1++;
    } else if (nums[i] === 0) {
      [nums[i], nums[p0]] = [nums[p0], nums[i]];
      if (p0 < p1) {
        [nums[i], nums[p1]] = [nums[p1], nums[i]];
      }
      p0++;
      p1++;
    }
  }

  return nums;
}

/**
 * 双指针
 * 一次遍历
 * p0 从头部开始 记录 0
 * p2 从尾部开始 记录 2
 * @desc 时间复杂度 O(n) 空间复杂度 O(1)
 * @param nums {number[]}
 * @returns {number[]}
 */
export function sortColors3(nums: number[]): number[] {
  let p0 = 0;
  let p2 = nums.length - 1;
  for (let i = 0; i <= p2; i++) {
    while (i <= p2 && nums[i] === 2) {
      [nums[i], nums[p2]] = [nums[p2], nums[i]];
      p2--;
    }
    if (nums[i] === 0) {
      [nums[i], nums[p0]] = [nums[p0], nums[i]];
      p0++;
    }
  }

  return nums;
}
