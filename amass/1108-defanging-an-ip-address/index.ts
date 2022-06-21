/**
 * 正则匹配
 * @desc 时间复杂度 O(n) 空间复杂度 O(1)
 * @param address {string}
 * @returns {string}
 */
export function defangIPaddr(address: string): string {
  return address.replace(/\./g, "[.]");
}
