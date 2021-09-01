const input = [4, 3, 7, 8, 6, 2, 1];

function zigZag(arr) {
  let flag = true;
  for (let i = 0; i < arr.length - 1; i++) {
    if (flag) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
      }
    } else {
      if (arr[i] < arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
      }
    }
    flag = !flag;
  }
  return arr;
}

console.log(zigZag(input));
