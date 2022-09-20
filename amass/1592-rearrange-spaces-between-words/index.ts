/**
 * 模拟
 * @desc 时间复杂度 O(n) 空间复杂度 O(n)
 * @param text {string}
 * @returns {string}
 */
export function reorderSpaces(text: string): string {
  const blanks = text.replace(/\w/g, "");
  const len = blanks.length;
  const words = text
    .trim()
    .split(" ")
    .filter((v) => v);

  if (words.length === 1) {
    return words.join("") + blanks;
  }
  const diff = words.length - 1;
  const mod = len % diff;
  const segment = (len - mod) / diff;

  let tail: string = "";
  if (mod !== 0) {
    for (let i = 0; i < mod; i++) {
      tail += " ";
    }
  }

  let divider = "";
  for (let i = 0; i < segment; i++) {
    divider += " ";
  }

  return words.join(divider) + tail;
}
