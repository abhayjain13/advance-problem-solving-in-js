function tappingRainWater(arr) {
  let leftArr = [];
  let rightArr = [];
  for (let i = 0; i < arr.length; i++) {
    leftArr.push(Math.max(leftArr[i - 1] || 0, arr[i]));
    rightArr.push(Math.max(rightArr[i - 1] || 0, arr[arr.length - i - 1]));
  }
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    count += Math.min(leftArr[i], rightArr[i]) - arr[i];
  }
  return count;
}

const arr = [3, 0, 2, 0, 4];

const output = tappingRainWater(arr);
console.log(output);
