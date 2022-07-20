# 1260. 二维网格迁移

> 难度：简单
>
> https://leetcode.cn/problems/shift-2d-grid/

## 题目

给你一个 m 行 n  列的二维网格  grid  和一个整数  k。你需要将  grid  迁移  k  次。

每次「迁移」操作将会引发下述活动：

- 位于 grid[i][j]  的元素将会移动到  grid[i][j + 1]。
- 位于  grid[i][n - 1] 的元素将会移动到  grid[i + 1][0]。
- 位于 grid[m - 1][n - 1]  的元素将会移动到  grid[0][0]。

请你返回  k 次迁移操作后最终得到的 二维网格。

**示例 1**

![image](https://user-images.githubusercontent.com/25545052/179970792-067e3208-c1f4-4b25-8eb5-ccdcecf30829.png)

```
输入：grid = [[1,2,3],[4,5,6],[7,8,9]], k = 1
输出：[[9,1,2],[3,4,5],[6,7,8]]
```

**示例 2**

![image](https://user-images.githubusercontent.com/25545052/179970800-7070f6ec-7a7e-422b-a447-659016935d8f.png)

```
输入：grid = [[3,8,1,9],[19,7,2,5],[4,6,11,10],[12,0,21,13]], k = 4
输出：[[12,0,21,13],[3,8,1,9],[19,7,2,5],[4,6,11,10]]
```

**示例 3**

```
输入：grid = [[1,2,3],[4,5,6],[7,8,9]], k = 9
输出：[[1,2,3],[4,5,6],[7,8,9]]
```

提示：

- m == grid.length
- n == grid[i].length
- 1 <= m <= 50
- 1 <= n <= 50
- -1000 <= grid[i][j] <= 1000
- 0 <= k <= 100

## 解答

```typescript
/**
 * 模拟
 * @desc 时间复杂度 O(nk) 空间复杂度 O(1)
 * @param grid {number[][]}
 * @param k {number[]}
 * @returns {number[][]}
 */
export function shiftGrid(grid: number[][], k: number): number[][] {
  const n: number = grid.length;
  const m: number = grid[0].length;
  while (k !== 0) {
    let migration: number | null;
    for (let i = 0; i < n; i++) {
      if (typeof migration == "number") {
        grid[i].unshift(migration);
        migration = null;
      }
      if (!migration) {
        migration = grid[i].pop();
      }
    }
    grid[0].unshift(migration);

    k--;
  }

  return grid;
}
```
