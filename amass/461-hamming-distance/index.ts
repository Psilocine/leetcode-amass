/**
 * 位运算
 * 两个数异或后的值每次右移一位，如果最低位是1，则令计数器加一
 * @desc 时间复杂度 O(logC) C 是元素数据范围，本题为 31 空间复杂度 O(1)
 * @param x {number}
 * @param y {number}
 * @return {number}
 */
export function hammingDistance(x: number, y: number): number {
  let target: number = x ^ y;
  let sum = 0;
  while (target) {
    sum += target & 1;
    target >>= 1
  }
  return sum;
};

/**
 * Brian Kernighan 算法
 * 
 * @desc 时间复杂度 O(logC) C 是元素数据范围，本题为 31 空间复杂度 O(1)
 * @param x {number}
 * @param y {number}
 * @return {number}
 */
export function hammingDistance2(x: number, y: number): number {
  let target: number = x ^ y;
  let sum = 0;
  while (target !== 0) {
    target &= target - 1;
    sum++;
  }
  return sum;
};