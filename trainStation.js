function trainStationCount(arr, dep) {
  arr.sort((a, b) => a > b);
  dep.sort((a, b) => a > b);
  let maxPlatform = Number.MIN_VALUE;
  let count = 0;
  let j = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < dep[j]) {
      count++;
    } else {
      if (count > maxPlatform) {
        maxPlatform = count;
      }
      count = 0;
      j++;
    }
  }
  return maxPlatform;
}

const arr = [900, 940, 950, 1100, 1500, 1800];
const dep = [910, 1200, 1120, 1130, 1900, 2000];

const output = trainStationCount(arr, dep);
console.log(output);
