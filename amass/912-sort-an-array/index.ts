/**
 * 快速排序
 * @desc 时间复杂度 O(nlogn) 空间复杂度 O(logn)
 * @param nums {number[]}
 * @returns {number[]}
 */
export function sortArray(nums: number[]): number[] {
  return quick(nums);
}
function quick(arr: number[]) {
  if (arr.length < 2) {
    return arr;
  }
  const pivotIdx = Math.floor(arr.length / 2);
  const pivot = arr.splice(pivotIdx, 1)[0];
  const left: number[] = [];
  const right: number[] = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return quick(left).concat(pivot, quick(right));
}
/**
 * 快速排序 - 空间优化
 * @desc 时间复杂度 O(nlogn) 空间复杂度 O(1)
 * @param nums {number[]}
 * @returns {number[]}
 */
export function sortArray2(nums: number[]): number[] {
  return quick2(nums, 0, nums.length - 1);
}

function quick2(arr: number[], low: number, high: number) {
  if (low >= high) return arr;

  // 不随机 pivot
  // let mid: number = partition(arr, low, high);
  // 随机 pivot
  let mid: number = shuffle(arr, low, high);
  quick2(arr, low, mid - 1);
  quick2(arr, mid + 1, high);
  return arr;
}

// 洗牌，随机选择 pivot
function shuffle(arr, low, high) {
  let pivotIdx = Math.floor(Math.random() * (high - low)) + low;
  [arr[low], arr[pivotIdx]] = [arr[pivotIdx], arr[low]];

  return partition(arr, low, high);
}

function partition(arr: number[], low: number, high: number) {
  const pivot = arr[low];

  let l = low,
    r = high;

  while (l < r) {
    while (l < r && arr[r] >= pivot) {
      r -= 1;
    }
    arr[l] = arr[r];

    while (l < r && arr[l] <= pivot) {
      l += 1;
    }
    arr[r] = arr[l];
  }

  arr[l] = pivot;
  return l;
}
