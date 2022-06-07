/**
 * 排序 + 插队
 * @desc 时间复杂度 O(nlogn) 空间复杂度 O(logn)
 * @param people {number[][]}
 * @returns {number[][]}
 */
export function reconstructQueue(people: number[][]): number[][] {
  const ans: number[][] = [];

  // 根据身高降序，如果身高相等，人数升序 -> [7,0], [7,1]
  people.sort((a,b) => b[0] - a[0] || a[1] - b[1])

  for (const p of people) {
    if (ans.length <= p[1]) {
      // 排队
      ans.push(p)
    } else {
      // 插队，从高到低排，不影响后面元素
      ans.splice(p[1], 0, p);
    }
  }

  return ans;
}
