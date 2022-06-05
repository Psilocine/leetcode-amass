/**
 * 拒绝采样
 * @desc 时间复杂度 O(1) 空间复杂度 O(1)
 */
export class Solution {
  private xc: number;
  private yc: number;
  private r: number;
  constructor(radius: number, x_center: number, y_center: number) {
    this.xc = x_center;
    this.yc = y_center;
    this.r = radius;
  }

  randPoint(): number[] {
    while (true) {
      const x = Math.random() * (2 * this.r) - this.r;
      const y = Math.random() * (2 * this.r) - this.r;
      if (x * x + y * y <= this.r * this.r) {
        return [this.xc + x, this.yc + y];
      }
    }
  }
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(radius, x_center, y_center)
 * var param_1 = obj.randPoint()
 */
