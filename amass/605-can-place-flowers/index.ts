/**
 * 贪心
 * 1. 遇到1，说明这个位置有花，必然要从 index+2 的位置才有可能种花
 * 2. 遇到0，index-1 必定是0，只需判断 index+1 是不是 1，即可得出 index 能不能种花
 * 2.1 index+1 是 1，从 index+3 开始下一次判断
 * 2.2 index+1 是 0，当前位置 index 种花，从 index+2 判断下一次
 * @desc 时间复杂度 O(n) 空间复杂度 O(1)
 * @param flowerbed {number[]}
 * @param n {number}
 * @returns {boolean}
 */
export function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  let i = 0;
  while (i < flowerbed.length && n > 0) {
    if (flowerbed[i] === 1) {
      i += 2;
    } else if (i === flowerbed.length - 1 || flowerbed[i + 1] === 0) {
      i += 2;
      n--;
    } else {
      i += 3;
    }
  }

  return n === 0 ? true : false;
}
