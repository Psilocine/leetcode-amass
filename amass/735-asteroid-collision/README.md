# 735. 行星碰撞

> 难度：中等
>
> https://leetcode.cn/problems/asteroid-collision/

## 题目

给定一个整数数组 asteroids，表示在同一行的行星。

对于数组中的每一个元素，其绝对值表示行星的大小，正负表示行星的移动方向（正表示向右移动，负表示向左移动）。每一颗行星以相同的速度移动。

找出碰撞后剩下的所有行星。碰撞规则：两个行星相互碰撞，较小的行星会爆炸。如果两颗行星大小相同，则两颗行星都会爆炸。两颗移动方向相同的行星，永远不会发生碰撞。

**示例 1**

```
输入：asteroids = [5,10,-5]
输出：[5,10]
解释：10 和 -5 碰撞后只剩下 10 。 5 和 10 永远不会发生碰撞。
```

**示例 2**

```
输入：asteroids = [8,-8]
输出：[]
解释：8 和 -8 碰撞后，两者都发生爆炸。
```

**示例 3**

```
输入：asteroids = [10,2,-5]
输出：[10]
解释：2 和 -5 发生碰撞后剩下 -5 。10 和 -5 发生碰撞后剩下 10 。
```

提示：

- 2 <= asteroids.length <= 10^4
- -1000 <= asteroids[i] <= 1000
- asteroids[i] != 0

## 解答

```typescript
/**
 * 单调栈模拟
 * 使用变量 alive 记录行星 aster 是否还存在（未爆炸）
 * 当行星 aster 存在且 aster < 0，说明两个行星互相向对方移动
 * 如果栈顶元素大于等于 -aster 则行星 aster 爆炸
 * 栈顶元素小于等于 -aster，说明行星 aster不会爆炸，则将 aster 入栈
 * @desc 时间复杂度 O() 空间复杂度 O()
 * @param asteroids {number[]}
 * @returns {number[]}
 */
export function asteroidCollision(asteroids: number[]): number[] {
  const stack = [];
  for (const aster of asteroids) {
    let alive = true;

    while (
      alive &&
      aster < 0 &&
      stack.length > 0 &&
      stack[stack.length - 1] > 0
    ) {
      alive = stack[stack.length - 1] < -aster;
      if (stack[stack.length - 1] <= -aster) {
        stack.pop();
      }
    }

    if (alive) {
      stack.push(aster);
    }
  }

  const size = stack.length;
  const ans = new Array(size).fill(0);
  for (let i = size - 1; i >= 0; i--) {
    ans[i] = stack.pop();
  }

  return ans;
}
```
