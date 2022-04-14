/**
 * 动态规划
 * 
 * @desc 时间复杂度 O(n) 空间复杂度 O(1)
 * @param nums {Number[]}
 * @returns {Number}
 */
export function maxSubArray(nums: number[]): number {
  // nums 累加，所以第一个累加值为第一个数值
  const result: number[] = [nums[0]];

  for (let i = 1; i < nums.length; i++) {
    const item = nums[i];
    // 如果之前的累加值大于 0，则保留；反之舍弃
    if (result[i - 1] > 0) {
      result.push(result[i - 1] + item)
    } else {
      result.push(item)
    }
  }

  // 比较最大值输出，可以在 for 循环里做。此处是为了逻辑清晰
  return Math.max(...result);
};

/**
 * 分治
 * 
 * @desc 时间复杂度 O(nlogn) 空间复杂度 O(logn)
 * @param nums {Number[]}
 * @returns {Number}
 */
export function maxSubArray2(nums: number[]): number {
  if (!nums.length) return 0;

  return maxSubArraySum(nums, 0, nums.length - 1);
}

function maxSubArraySum(nums: number[], left: number, right: number) {
  if (left === right) {
    return nums[left]
  }
  const mid = Math.floor((left + right) / 2);

  return Math.max(
    maxCorssingSum(nums, left, mid, right),
    maxSubArraySum(nums, left, mid),
    maxSubArraySum(nums, mid + 1, right)
  );
}

function maxCorssingSum(nums: number[], left: number, mid: number, right: number) {
  let sum: number = 0;
  let leftSum: number = Number.MIN_VALUE;
  // 左边包含 nums[mid] 获取最大的累加值
  for (let i = mid; i >= left; i--) {
    sum += nums[i];
    if (leftSum < sum) {
      leftSum = sum;
    }
  }

  sum = 0;
  let rightSum: number = Number.MIN_VALUE;
  // 右边不包含 nums[mid] 获取最大的累加值
  for (let i = mid + 1; i <= right; i++) {
    sum += nums[i];
    if (rightSum < sum) {
      rightSum = sum;
    }
  }

  return leftSum + rightSum;
}


/**
 * 1. 定义状态（定义子问题）
 * 2. 状态转移方程（描述子问题之间的联系）
 * 3. 思考初始值
 * 4. 思考输出
 */