function pairDiff(arr, k) {
  const pairObj = {};
  for (let i = 0; i < arr.length; i++) {
    const sum = arr[i] + k;
    if (arr[i] in pairObj) {
      return {
        index1: pairObj[arr[i]],
        index2: i,
      };
    }
    pairObj[sum] = i;
  }
  return false;
}

const input = [5, 20, 3, 2, 50, 80];
const k = 78;
console.log(pairDiff(input, k));
