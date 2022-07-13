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
