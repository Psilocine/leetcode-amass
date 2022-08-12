/**
 * 哈希表
 * @desc 时间复杂度 O(n) 空间复杂度 O(n)
 * @param groupSizes {number[]}
 * @returns {number[][]}
 */
export function groupThePeople(groupSizes: number[]): number[][] {
  const arr = groupSizes.map((value, i) => {
    return {
      value,
      i,
    };
  });

  // 根据值升序
  arr.sort((a, b) => a.value - b.value);

  const ans = [];
  let temp = [];
  for (let i = 0; i < arr.length; i++) {
    temp.push(arr[i].i);

    if (arr[i].value === temp.length) {
      ans.push(temp.slice());
      temp = [];
    }
  }

  return ans;
}
