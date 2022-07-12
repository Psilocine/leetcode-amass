/**
 * 单调栈 + 哈希表
 * @desc 时间复杂度 O(m + n) 空间复杂度 O(n) m 为 nums1 的长度
 * @param nums1 {number[]}
 * @param nums2 {number[]}
 * @returns {number[]}
 */
export function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
  const map: Map<number, number> = new Map();

  const stack: number[] = [];

  for (let i = 0; i < nums2.length; i++) {
    while (stack.length && nums2[i] > nums2[stack[stack.length - 1]]) {
      const index = stack.pop();
      map.set(nums2[index], nums2[i]);
    }
    stack.push(i);
  }

  let ans: number[] = [];

  for (let i = 0; i < nums1.length; i++) {
    ans.push(map.get(nums1[i]) || -1);
  }

  return ans;
}
