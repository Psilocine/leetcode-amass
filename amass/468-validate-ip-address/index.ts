/**
 * 模拟
 * @desc 时间复杂度 O(n) 空间复杂度 O(1)
 * @param queryIP {string}
 * @returns {string}
 */
export function validIPAddress(queryIP: string): string {
  const ipArr = queryIP.includes(".") ? queryIP.split(".") : queryIP.split(":");
  if (ipArr.some((item) => !item)) return "Neither";

  if (ipArr.length === 4) {
    return isIPv4(ipArr) ? "IPv4" : "Neither";
  } else if (ipArr.length === 8) {
    return isIPv6(ipArr) ? "IPv6" : "Neither";
  } else {
    return "Neither";
  }
}
function isIPv4(ipArr: string[]) {
  for (const item of ipArr) {
    const num = parseInt(item);
    if (/[^0-9]/.test(item)) return false;
    if (num > 255) return false;
    if (item.length !== 1 && item.charAt(0) === "0") return false;
  }
  return true;
}

function isIPv6(ipArr: string[]) {
  for (const item of ipArr) {
    if (item.length > 4) return false;
    if (/[^a-fA-F0-9]/.test(item)) return false;
  }
  return true;
}
