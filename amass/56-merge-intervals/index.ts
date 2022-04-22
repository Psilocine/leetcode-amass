/**
 * 栈 - 排序 - 双指针
 * @desc 时间复杂度 O(nlogn) 空间复杂度 O(logn)
 * @param intervals {number[][]}
 * @returns {number[][]}
 */
export function merge(intervals: number[][]): number[][] {
  const result = [];

  // 根据 [i][] 升序排序
  intervals.sort((a, b) => a[0] - b[0]);

  const queue = [intervals.shift()];
  while (queue.length) {
    const item = queue.shift();
    let start = item[0];
    let end = item[1];
    while (intervals.length) {
      const v = intervals.shift();
      if (v[0] <= end) {
        end = end > v[1] ? end : v[1];
      } else {
        queue.push(v);
        break;
      }
    }
    result.push([start, end]);
  }

  return result;
}

/**
 * 双指针
 * 当前数组的[1] 作为右指针去和接下来的元素对比：
 * - 如果均小于 说明在当前数组内
 * - 如果 [0] 小于 右指针，[1] 大于 右指针，说明交集，把右指针赋值给 [1]
 * - 如果 [0] 大于 右指针，说明没有交集
 * @desc 时间复杂度 O(nlogn) 空间复杂度 O(logn)
 * @param intervals {number[][]}
 * @returns {number[][]}
 */
export function merge2(intervals: number[][]): number[][] {
  const n = intervals.length;
  if (n <= 1) return intervals;

  // 根据 [i][] 升序排序
  intervals.sort((a, b) => a[0] - b[0]);
  const result = [];

  for (let i = 0; i < n; ) {
    let left = intervals[i][0];
    let right = intervals[i][1];
    let j = i + 1;

    while (j < n && intervals[j][0] <= right) {
      right = Math.max(right, intervals[j][1]);
      j++;
    }
    result.push([left, right]);

    i = j;
  }

  return result;
}
