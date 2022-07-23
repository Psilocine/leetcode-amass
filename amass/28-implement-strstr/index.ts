/**
 * 暴力破解
 * @desc 时间复杂度 O(n * m) 空间复杂度 O(1)
 * @param haystack {string}
 * @param needle {string}
 * @returns {number}
 */
export function strStr(haystack: string, needle: string): number {
  const n = haystack.length;
  const m = needle.length;
  for (let i = 0; i + m <= n; i++) {
    let flag = true;
    for (let j = 0; j < m; j++) {
      if (haystack[i + j] !== needle[j]) {
        flag = false;
        break;
      }
    }
    if (flag) {
      return i;
    }
  }
  return -1;
}

/**
 * KMP 算法
 * @desc 时间复杂度 O(n + m) 空间复杂度 O(m)
 * @param haystack {string}
 * @param needle {string}
 * @returns {number}
 */
export function strStr2(haystack: string, needle: string): number {
  const n = haystack.length;
  const m = needle.length;
  if (m === 0) {
    return 0;
  }

  const next = new Array(m).fill(0);

  // 构建 next 前缀数组
  for (let i = 1, j = 0; i < m; i++) {
    while (j > 0 && needle[i] !== needle[j]) {
      j = next[j - 1];
    }
    if (needle[i] === needle[j]) {
      j++;
    }
    next[i] = j;
  }

  for (let i = 0, j = 0; i < n; i++) {
    while (j > 0 && haystack[i] !== needle[j]) {
      j = next[j - 1];
    }
    if (haystack[i] === needle[j]) {
      j++;
    }
    if (j === m) {
      return i - m + 1;
    }
  }

  return -1;
}
