const input = [3, 9, -2, 4, 1, -7, 2, 6, -5, 8, -3, -7, 6, 2, 1];
const k = 5;

function countSubArr(arr, k) {
  let sum = 0;
  const countObj = {
    0: 0,
  };

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    const computed = sum - k;
    if (computed in countObj) {
      console.log({ start: countObj[computed], end: i });
    }

    if (sum in countObj) {
      // countObj[sum]++;
    } else {
      countObj[sum] = i + 1;
    }
  }
  return countObj;
}

countSubArr(input, k);
