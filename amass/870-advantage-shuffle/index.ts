/**
 * 排序 + 双指针
 * @desc 时间复杂度 空间复杂度 O()
 * @param nums1 {number[]}
 * @param nums2 {number[]}
 * @returns {number[]}
 */
export function advantageCount(nums1: number[], nums2: number[]): number[] {
  const n = nums1.length;

  const idx1: number[] = new Array(n).fill(0);
  const idx2: number[] = new Array(n).fill(0);

  for (let i = 0; i < n; i++) {
    idx1[i] = i;
    idx2[i] = i;
  }

  idx1.sort((a, b) => nums1[a] - nums1[b]);
  idx2.sort((a, b) => nums2[a] - nums2[b]);

  const ans: number[] = new Array(n).fill(0);

  let left = 0,
    right = n - 1;

  for (let i = 0; i < n; i++) {
    if (nums1[idx1[i]] > nums2[idx2[left]]) {
      ans[idx2[left]] = nums1[idx1[i]];
      ++left;
    } else {
      ans[idx2[right]] = nums1[idx1[i]];
      --right;
    }
  }

  return ans;
}
