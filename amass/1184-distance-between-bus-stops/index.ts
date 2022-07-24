/**
 * 模拟
 * @desc 时间复杂度 O(n) 空间复杂度 O(n)
 * @param distance {number[]}
 * @param start {number}
 * @param destination {number}
 * @returns {number}
 */
export function distanceBetweenBusStops(
  distance: number[],
  start: number,
  destination: number
): number {
  if (destination < start) {
    [start, destination] = [destination, start];
  }

  // 顺时针
  const clockwise = distance.slice(start, destination);
  // 逆时针
  let anticlockwise = distance.slice(destination);
  if (start !== 0) {
    anticlockwise.unshift(...distance.slice(0, start));
  }

  const clockwiseSum = clockwise.reduce((v, p) => v + p, 0);

  const anticlockwiseSum = anticlockwise.reduce((v, p) => v + p, 0);

  return clockwiseSum > anticlockwiseSum ? anticlockwiseSum : clockwiseSum;
}

/**
 * 模拟 - 优化空间
 * @desc 时间复杂度 O(n) 空间复杂度 O(1)
 * @param distance {number[]}
 * @param start {number}
 * @param destination {number}
 * @returns {number}
 */
export function distanceBetweenBusStops2(
  distance: number[],
  start: number,
  destination: number
): number {
  if (destination < start) {
    [start, destination] = [destination, start];
  }
  let sum1 = 0,
    sum2 = 0;

  for (let i = 0; i < distance.length; i++) {
    if (i >= start && i < destination) {
      sum1 += distance[i];
    } else {
      sum2 += distance[i];
    }
  }

  return Math.min(sum1, sum2);
}
