/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

/**
 * 二分查找
 * @desc 时间复杂度 O(logn) 空间复杂度 O(1)
 * @param n {number}
 * @returns {number}
 */
export function solution(isBadVersion: any) {
  return function (n: number): number {
    // 模板二 左闭右开
    let l = 0,
      r = n;

    while (l < r) {
      const c = l + Math.floor((r - l) / 2);
      if (isBadVersion(c)) {
        r = c;
      } else {
        l = c + 1;
      }
    }

    return r;
  };
}
