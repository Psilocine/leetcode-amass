/**
 * 回溯
 * @desc 时间复杂度 O(n * n!) 空间复杂度 O(n)
 * @param s{string}
 * @returns {string[]}
 */
export function permutation(s: string): string[] {
  const ans: Set<string> = new Set();
  const used = {};

  const backtrack = (path) => {
    if (path.length === s.length) {
      ans.add(path);
      return;
    }

    for (let i = 0; i < s.length; i++) {
      if (used[i]) continue;

      used[i] = true;
      backtrack(path + s[i]);
      used[i] = false;
    }
  };

  backtrack("");

  return [...ans];
}
