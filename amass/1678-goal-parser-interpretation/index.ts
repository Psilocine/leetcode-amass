/**
 * 模拟
 * @desc 时间复杂度 O(n) 空间复杂度 O(1)
 * @param command {string}
 * @returns {string}
 */
export function interpret(command: string): string {
  return command.replace(/\(al\)/g, "al").replace(/\(\)/g, "o");
}
