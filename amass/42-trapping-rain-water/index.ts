/**
 * 双指针
 * @desc 时间复杂度 O(n) 空间复杂度 O(1)
 * @param height {number[]}
 * @returns {number}
 */
export function trap(height: number[]): number {
  let ans = 0;
  let l = 0;
  let r = height.length - 1;
  let lMax = 0;
  let rMax = 0;

  while (l < r) {
    lMax = Math.max(lMax, height[l]);
    rMax = Math.max(rMax, height[r]);
    if (lMax < rMax) {
      ans += lMax - height[l];
      l++;
    } else {
      ans += rMax - height[r];
      r--;
    }
  }

  return ans;
}
