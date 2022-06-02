/**
 * 划分数组
 * @desc 时间复杂度 O(log(min(m,n))) 空间复杂度 O(1)
 * @param nums1 {number[]}
 * @param nums2 {number[]}
 * @returns {number}
 */
export function findMedianSortedArrays(
  nums1: number[],
  nums2: number[]
): number {
  if (nums1.length > nums2.length) {
    [nums1, nums2] = [nums2, nums1];
  }

  const m = nums1.length;
  const n = nums2.length;

  let left = 0;
  let right = m;
  // 前一部分的最大值 后一部分的最小值
  let median1 = 0,
    median2 = 0;

  while (left <= right) {
    let i = Math.floor((left + right) / 2);
    let j = Math.floor((m + n + 1) / 2) - i;

    const nums_im1 = i === 0 ? -Infinity : nums1[i - 1];
    const nums_i = i === m ? Infinity : nums1[i];

    const nums_jm1 = j === 0 ? -Infinity : nums2[j - 1];
    const nums_j = j === n ? Infinity : nums2[j];

    if (nums_im1 <= nums_j) {
      median1 = Math.max(nums_im1, nums_jm1);
      median2 = Math.min(nums_i, nums_j);
      left = i + 1;
    } else {
      right = i - 1;
    }
  }

  return (m + n) % 2 === 0 ? (median1 + median2) / 2 : median1;
}
