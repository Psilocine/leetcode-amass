/**
 * 栈 先入后出
 *
 * @desc 时间复杂度 O(n) 空间复杂度 O(n)
 * @param s {String}
 * @return {Boolean}
 */
export function validParentheses(s: string): boolean {
  if (s.length === 0) return true;
  if (s.length % 2 === 1) return false;
  
  const map:Map<string, string> = new Map([
    [")", "("],
    ["}", "{"],
    ["]", "["],
  ]);

  const stack: string[] = [];

  for (let i = 0; i < s.length; i++) {
    if (!map.get(s[i])) {
      stack.push(s[i])
    } else if (stack.pop() !== map.get(s[i])) {
      return false
    }
  }

  return !stack.length;
}
