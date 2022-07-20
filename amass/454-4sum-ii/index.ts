/**
 * 哈希表
 * 分组 AB一组 CD一组，时间复杂度最优
 * @desc 时间复杂度 O(n ^ 2) 空间复杂度 O(n ^ 2)
 * @param nums1 {number[]}
 * @param nums2 {number[]}
 * @param nums3 {number[]}
 * @param nums4 {number[]}
 * @returns {number}
 */
export function fourSumCount(
  nums1: number[],
  nums2: number[],
  nums3: number[],
  nums4: number[]
): number {
  const map: Map<number, number> = new Map();
  let count: number = 0;

  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      const sum = nums1[i] + nums2[j];
      map.set(sum, (map.get(sum) || 0) + 1);
    }
  }

  for (let i = 0; i < nums3.length; i++) {
    for (let j = 0; j < nums4.length; j++) {
      const sum = nums3[i] + nums4[j];
      if (map.has(-sum)) {
        count += map.get(-sum);
      }
    }
  }

  return count;
}
