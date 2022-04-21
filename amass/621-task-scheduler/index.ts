/**
 * 矩阵
 * 找出最多次数 m 的任务 X，向 (m - 1) 个 X 中间的 n 个 等待状态单位时间
 * 插入不是 X 的任务，再加上最后一个 X 后面 的任务数量
 * 
 * 假设 tasks 为 ["A","A","A","B","C","D"]，n 为 2，矩阵如下
 * A {B} {C}
 * A {D} {wait}
 * A {} {}
 * 结果为 2 * 3 + 1(最后一个 A) = 7
 * 
 * @desc 时间复杂度 O(task + m) 空间复杂度 O(m) m 不超过 26 因为是大写字母表
 * @param tasks {string[]}
 * @param n {number}
 * @return {number}
 */
export function leastInterval(tasks: string[], n: number): number {
  const len = tasks.length;
  let maxTaskCount = 0;
  let obj = {};

  // 遍历出所有任务
  tasks.forEach((task: string) => {
    const code = task.charCodeAt(0);
    if (obj[code]) {
      obj[code] += 1;
    } else {
      obj[code] = 1;
    }
  });

  // 按任务数量降序排序
  const arr: any[] = Object.entries(obj).sort((a: any, b: any) => b[1] - a[1]);

  // 找到和最大任务数相等的任务（最后一行的任务）
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    if (item[1] === arr[0][1]) {
      maxTaskCount++;
    } else {
      break;
    }
  }

  const time = (arr[0][1] - 1) * (n + 1) + maxTaskCount;
  return time < len ? len : time;
}
