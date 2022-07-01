/**
 * 哈希表 set
 * @desc 时间复杂度 O(n) 空间复杂度 O(n)
 * @param nums1 {number[]}
 * @param nums2 {number[]}
 * @returns {number[]}
 */
export function intersection(nums1: number[], nums2: number[]): number[] {
    const set = new Set();
    for (let i = 0; i < nums1.length; i++) {
        if (!set.has(nums1[i])) {
            set.add(nums1[i])
        }
    }

    const ans: number[] = []
    for (let i = 0; i < nums2.length; i++) {
        if (set.has(nums2[i]) && !ans.includes(nums2[i])) {
            ans.push(nums2[i])
        }
    }

    return ans;
};