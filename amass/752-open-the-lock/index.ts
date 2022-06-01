/**
 *
 * @desc 时间复杂度 O() 空间复杂度 O()
 * @param deadends {string[]}
 * @param target {string}
 * @returns {number}
 */
export function openLock(deadends: string[], target: string): number {
  const visitedSet: Set<string> = new Set();
  const deadendSet: Set<string> = new Set(deadends);
  if (target === "0000") return 0;
  let count: number = 0;
  const queue: string[] = ["0000"];

  while (queue.length) {
    const n = queue.length;

    for (let i = 0; i < n; i++) {
      const node = queue.shift();

      if (node === target) {
        return count;
      } else if (deadendSet.has(node)) {
        continue;
      } else if (visitedSet.has(node)) {
        // 防止重复
        continue;
      }
      visitedSet.add(node);

      for (let j = 0; j < 4; j++) {
        const char = node[j];

        // up 往上拨
        queue.push(
          node.substring(0, j) +
            (char === "9" ? "0" : +char + 1) +
            node.substring(j + 1)
        );
        // down 往下拨
        queue.push(
          node.substring(0, j) +
            (char === "0" ? "9" : +char - 1) +
            node.substring(j + 1)
        );
      }
    }

    count++;
  }

  return -1;
}
