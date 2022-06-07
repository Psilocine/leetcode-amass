/**
 * 二分查找
 * @desc 时间复杂度 O(n logm) 空间复杂度 O(1) n 是 piles 长度，m 是 piles 的最大值
 * @param piles {number[]}
 * @param h {number}
 * @returns {number}
 */
export function minEatingSpeed(piles: number[], h: number): number {
  // 速度最小的时候，耗时最长
  let left: number = 1;
  // 速度最大的时候，耗时最短
  let right: number = Math.max(...piles);
  while (left < right) {
    let mid = left + Math.floor((right - left) / 2);

    if (calculateSum(piles, mid) > h) {
      // 耗时太多，说明速度慢了
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return left;
}

function calculateSum(piles: number[], speed: number) {
  let sum: number = 0;
  for (const pile of piles) {
    sum += Math.floor((pile + speed - 1) / speed);
  }

  return sum;
}
