/**
 * 哈希表
 * @desc 时间复杂度 O(n) 空间复杂度 O(n)
 * @param n {number}
 * @returns {boolean}
 */
export function isHappy(n: number): boolean {
  const set = new Set();

  const getNum = (num) => {
    let sum = 0;
    while (num) {
      sum += (num % 10) * (num % 10);
      num = Math.floor(num / 10);
    }

    return sum;
  };
  while (true) {
    if (set.has(n)) return false;
    if (n === 1) return true;

    set.add(n);
    n = getNum(n);
  }
}
