/**
 * BFS
 * @desc 时间复杂度 O(n + m) 空间复杂度 O(n + m) n 为课程数，m 为先修课程要求数
 * @param numCourses {number}
 * @param prerequisites {number[][]}
 * @returns {boolean}
 */
export function canFinish(
  numCourses: number,
  prerequisites: number[][]
): boolean {
  const inDegree = new Array(numCourses).fill(0); // 入度数组
  const map = {}; // 先修课程表

  // [0, 1] 1 为 0 的先修课程
  for (let i = 0; i < prerequisites.length; i++) {
    inDegree[prerequisites[i][0]]++;

    if (map[prerequisites[i][1]]) {
      map[prerequisites[i][1]].push(prerequisites[i][0]);
    } else {
      map[prerequisites[i][1]] = [prerequisites[i][0]];
    }
  }

  const queue = [];
  let count = 0; // 能被修的课
  for (let i = 0; i < inDegree.length; i++) {
    // 入度为 0 的课入列
    if (inDegree[i] === 0) {
      queue.push(i);
    }
  }

  while (queue.length) {
    const selected = queue.shift();
    count++;

    const toEnQueue = map[selected];
    if (toEnQueue && toEnQueue.length) {
      for (let i = 0; i < toEnQueue.length; i++) {
        inDegree[toEnQueue[i]]--;
        if (inDegree[toEnQueue[i]] === 0) {
          queue.push(toEnQueue[i]);
        }
      }
    }
  }

  return count === numCourses;
}
