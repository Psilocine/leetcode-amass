/**
 * 暴力破解
 * @desc 时间复杂度 O(mn) 空间复杂度 O(1)
 * @param matrix {number[][]}
 * @param target {number}
 * @returns {boolean}
 */
export function searchMatrix(matrix: number[][], target: number): boolean {
  for (const row of matrix) {
    for (const item of row) {
      if (item === target) {
        return true;
      }
    }
  }
  return false;
}

/**
 * 二分查找
 * @desc 时间复杂度 O(mlogn) 空间复杂度 O(1)
 * @param matrix {number[][]}
 * @param target {number}
 * @returns {boolean}
 */
export function searchMatrix2(matrix: number[][], target: number): boolean {
  for (const row of matrix) {
        const index = search(row, target);
        if (index >= 0) {
            return true;
        }
    }
    return false;
}

function search(nums, target) {
  let low = 0,
    high = nums.length - 1;
  while (low <= high) {
    const mid = Math.floor((high - low) / 2) + low;
    const num = nums[mid];
    if (num === target) {
      return mid;
    } else if (num > target) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return -1;
}

/**
 * z 字形查找
 * @desc 时间复杂度 O(m + n) 空间复杂度 O(1)
 * @param matrix {number[][]}
 * @param target {number}
 * @returns {boolean}
 */
export function searchMatrix3(matrix: number[][], target: number): boolean {
  const m = matrix.length;
  const n = matrix[0].length;
  let y = 0; // 纵坐标
  let x = n - 1; // 横坐标
  while(x >= 0 && y < m) {
    if (matrix[y][x] === target) {
      return true;
    } else if (matrix[y][x] > target) {
      x--;
    } else {
      y++;
    }
  }
  return false;
}