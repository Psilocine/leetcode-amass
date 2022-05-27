/**
 * 前缀和
 * sumRange 时间复杂度为 O(1)
 * 如果在 sumRange for 循环则时间复杂度为 O(n)
 */
export class NumArray {
  private presum: number[];
  constructor(nums: number[]) {
    const n = nums.length;
    this.presum = new Array(n + 1).fill(0);
    for (let i = 1; i <= n; ++i) {
      this.presum[i] = this.presum[i - 1] + nums[i - 1];
    }
  }

  sumRange(left: number, right: number): number {
    console.log("this.presum", this.presum);
    return this.presum[right + 1] - this.presum[left];
  }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
