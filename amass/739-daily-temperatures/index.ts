/**
 * 暴力破解
 * @desc 时间复杂度 O(nm) 空间复杂度 O(1)
 * @param temperatures {number[]}
 * @returns {number[]}
 */
export function dailyTemperatures(temperatures: number[]): number[] {
  const ans: number[] = new Array(temperatures.length).fill(0);

  for (let i = 0; i < temperatures.length - 1; i++) {
    let num: number = 0;
    for (let j = i + 1; j < temperatures.length; j++) {
      num++;
      if (temperatures[i] < temperatures[j]) {
        ans[i] = num;
        break;
      }
    }
  }

  return ans;
}

/**
 * 单调栈
 * @desc 时间复杂度 O(n) 空间复杂度 O(n)
 * @param temperatures {number[]}
 * @returns {number[]}
 */
export function dailyTemperatures2(temperatures: number[]): number[] {
  const ans: number[] = new Array(temperatures.length).fill(0);

  const stack: number[] = [];

  for (let i = 0; i < temperatures.length; i++) {
    const temp = temperatures[i];
    // 和栈顶的值比较
    while (stack.length && temp > temperatures[stack[stack.length - 1]]) {
      let prevIndex = stack.pop();
      ans[prevIndex] = i - prevIndex;
    }
    stack.push(i);
  }
  return ans;
}
