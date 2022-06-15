/**
 * 二分查找
 * @desc 时间复杂度 O(logn) 空间复杂度 O(1)
 * @param n {number}
 * @returns {number}
 */
export function guessNumber(n: number, pick: number): number {
  // 模板一 左闭右闭
  // let l = 1, r = n;
  // while(l <= r) {
  //     const c = l + Math.floor((r - l) / 2);
  //     const res = guess(c);
  //     if (res === 0) {
  //         return c;
  //     } else if (res === 1){
  //         l = c + 1;
  //     } else {
  //         r = c - 1;
  //     }
  // }

  // 模板二 左闭右开
  let l = 1,
    r = n + 1;
  while (l < r) {
    const c = l + Math.floor((r - l) / 2);
    const res = guess(c, pick);
    if (res === 0) {
      return c;
    } else if (res === 1) {
      l = c + 1;
    } else {
      r = c;
    }
  }
}

function guess(c, pick) {
  if (c === pick) {
    return 0;
  } else if (c < pick) {
    return 1;
  } else {
    return -1;
  }
}
