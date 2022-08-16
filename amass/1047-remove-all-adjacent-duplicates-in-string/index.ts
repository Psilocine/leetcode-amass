/**
 * 栈
 * @desc 时间复杂度 O(n) 空间复杂度 O(n)
 * @param s {string}
 * @returns {string}
 */
export function removeDuplicates(s: string): string {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    while (stack.length && stack[stack.length - 1] === s[i]) {
      stack.pop();
      i++;
    }

    stack.push(s[i]);
  }

  return stack.join("");
}
