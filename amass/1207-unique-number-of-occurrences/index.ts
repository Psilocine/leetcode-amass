/**
 * 统计
 * @desc 时间复杂度 O(n) 空间复杂度 O(c = 1)
 * @param arr {number[]}
 * @returns {boolean}
 */
export function uniqueOccurrences(arr: number[]): boolean {
  // 根据题意可得 arr[i] 在 -1000 ~ 1000
  const count: number[] = new Array(2002).fill(0);

  for (let i = 0; i < arr.length; i++) {
    // +1000 防止负数溢出
    count[arr[i] + 1000]++;
  }

  // 根据题意可得，arr.length <= 1000 创建一个数组来判断是否出现相同次数（出现次数作为下标）
  const visited = new Array(1002).fill(false);
  for (let i = 0; i <= 2000; i++) {
    if (count[i]) {
      if (!visited[count[i]]) visited[count[i]] = true;
      else return false;
    }
  }

  return true;
}

/**
 * 哈希表
 * @desc 时间复杂度 O(n) 空间复杂度 O(n)
 * @param arr {number[]}
 * @returns {boolean}
 */
export function uniqueOccurrences2(arr: number[]): boolean {
  const count: Map<number, number> = new Map();

  for (let i = 0; i < arr.length; i++) {
    count.set(arr[i], (count.get(arr[i]) || 0) + 1);
  }

  // 如果出现次数重复，Set 帮我们去重
  return count.size === new Set(count.values()).size;
}
