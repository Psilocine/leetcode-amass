/**
 * 栈
 * @desc 时间复杂度 O(n) 空间复杂度 O(n)
 * @param s {string}
 * @returns {number}
 */
export function scoreOfParentheses(s: string): number {
  const stack: number[] = [0];
  for (let ch of s) {
    if (ch === "(") {
      stack.push(0);
    } else {
      const val: number = stack.pop();
      const cnt: number = stack.pop() + Math.max(2 * val, 1);
      stack.push(cnt);
    }
  }
  return stack.pop();
}
