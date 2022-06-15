/**
 * 二分查找
 * @desc 时间复杂度 O(logn) 空间复杂度 O(1)
 * @param x {number}
 * @returns {number}
 */
export function mySqrt(x: number): number {
  // 模版一 左闭右闭，相交终止
  // let l = 0, r = x;
  // while (l <= r) {
  //     const c = l + Math.floor((r - l) / 2);
  //     const square = c * c;
  //     if (square === x) {
  //         return c;
  //     } else if (square < x) {
  //         l = c + 1
  //     } else {
  //         r = c - 1;
  //     }
  // }

  // return r;

  // 模板二 相等终止
  // let l = 0, r = x + 1;
  // while(l < r) {
  //     const c = l + Math.floor((r - l)/ 2);
  //     const square = c * c;
  //     if (square === x) {
  //         return c;
  //     } else if (square < x) {
  //         l = c + 1;
  //     } else {
  //         r = c;
  //     }
  // }

  // return r - 1;

  // 模板三 相临终止
  let l = -1,
    r = x + 1;

  while (l + 1 < r) {
    const c = l + Math.floor((r - l) / 2);
    const square = c * c;
    if (square === x) {
      return c;
    } else if (square < x) {
      l = c;
    } else {
      r = c;
    }
  }

  return l;
}
