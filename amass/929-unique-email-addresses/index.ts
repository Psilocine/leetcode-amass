/**
 * 哈希表 模拟
 * @desc 时间复杂度 O(l) 空间复杂度 O(l) l 是 emails 中字符串的长度之和
 * @param emails {string[]}
 * @returns {number}
 */
export function numUniqueEmails(emails: string[]): number {
  let ans: number = 0;
  const map = new Map();

  for (let i = 0; i < emails.length; i++) {
    const email = emails[i].split("@");
    let local = email[0];
    let domain = email[1];
    local = local.split(".").join("").split("+")[0];

    if (map.has(`${local}@${domain}`)) {
      continue;
    } else {
      map.set(`${local}@${domain}`, true);
      ans++;
    }
  }

  return ans;
};