/**
 * 栈
 * @desc 时间复杂度 O(n) 空间复杂度 O(n)
 * @param tokens {string[]}
 * @returns {number}
 */
export function evalRPN(tokens: string[]): number {
  let stack = [];
  const n = tokens.length;
  for (let i = 0; i < n; i++) {

    const char = tokens[i];
    if (char === "+" || char === "-" || char === "*" || char === "/") {
      const num2 = +stack.pop();
      const num1 = +stack.pop();

      if (char === "+") {
        stack.push(num1 + num2);
      } else if (char === "-") {
        stack.push(num1 - num2);
      } else if (char === "*") {
        stack.push(num1 * num2);
      } else {
        stack.push(
          num1 / num2 > 0 ? Math.floor(num1 / num2) : Math.ceil(num1 / num2)
        );
      }
    } else stack.push(char)
  }

  const ans =  stack.pop();
  stack = null;

  return ans;
}
