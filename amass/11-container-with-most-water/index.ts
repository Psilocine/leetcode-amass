/**
 * 暴力破解
 * @desc 时间复杂度 O(n^2) 空间复杂度 O(1)
 * @param height {number[]}
 * @returns {number}
 */
export function maxArea(height: number[]): number {
  let area = 0;

  for (let i = 0; i < height.length - 1; ++i) {
    for (let j = i + 1; j < height.length; ++j) {
      const itemArea = Math.min(height[i], height[j]) * (j - i);

      if (itemArea > area) {
        area = itemArea;
      }
    }
  }

  return area;
}

/**
 * 双指针
 * @desc 时间复杂度 O(n) 空间复杂度 O(1)
 * @param height {number[]}
 * @returns {number}
 */
export function maxArea2(height: number[]): number {
  let area = 0;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    const crtArea = Math.min(height[left], height[right]) * (right - left);

    if (area < crtArea) {
      area = crtArea;
    }

    // value 比较小的那一遍移动
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return area;
}
