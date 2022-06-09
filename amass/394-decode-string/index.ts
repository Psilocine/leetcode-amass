/**
 * 栈辅助
 * @desc 时间复杂度 O(S) 空间复杂度 O(S) S 字符串长度
 * @param s {string}
 * @returns {string}
 */
export function decodeString(s: string): string {
  const numStack = [];
  const strStack = [];
  let num = 0;
  let ans: string = "";

  for (const char of s) {
    if (!isNaN(+char)) {
      num = num * 10 + Number(char);
    } else if (char === "[") {
      strStack.push(ans);
      ans = "";
      numStack.push(num);
      num = 0;
    } else if (char === "]") {
      let times = numStack.pop();
      ans = strStack.pop() + ans.repeat(times);
    } else {
      ans += char;
    }
  }

  return ans;
}
