# 207. 课程表

> 难度：中等
>
> https://leetcode.cn/problems/course-schedule/

## 题目

你这个学期必须选修 `numCourses` 门课程，记为  `0`  到 ` numCourses - 1` 。

在选修某些课程之前需要一些先修课程。 先修课程按数组 ` prerequisites` 给出，其中  `prerequisites[i] = [ai, bi]` ，表示如果要学习课程  `ai` 则 **必须** 先学习课程   `bi` 。

- 例如，先修课程对  `[0, 1]` 表示：想要学习课程 `0` ，你需要先完成课程 `1` 。

  请你判断是否可能完成所有课程的学习？如果可以，返回 `true` ；否则，返回 `false` 。

**示例 1**

```
输入：numCourses = 2, prerequisites = [[1,0]]
输出：true
解释：总共有 2 门课程。学习课程 1 之前，你需要完成课程 0 。这是可能的。
```

**示例 2**

```
输入：numCourses = 2, prerequisites = [[1,0],[0,1]]
输出：false
解释：总共有 2 门课程。学习课程 1 之前，你需要先完成​课程 0 ；并且学习课程 0 之前，你还应先完成课程 1 。这是不可能的。
```

提示：

- 1 <= numCourses <= 105
- 0 <= prerequisites.length <= 5000
- prerequisites[i].length == 2
- 0 <= ai, bi < numCourses
- prerequisites[i] 中的所有课程对 互不相同

## 解答

```typescript
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
          queue.push(inDegree[toEnQueue[i]]);
        }
      }
    }
  }

  return count === numCourses;
}
```
