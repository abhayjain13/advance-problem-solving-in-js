function chocoDis(input, m) {
  const sortArr = input.sort((a, b) => a > b);
  let minDIff = Number.MAX_VALUE;
  for (let i = 0; i + m - 1 < sortArr.length; i++) {
    const diff = sortArr[i + m - 1] - sortArr[i];
    if (minDIff > diff) {
      minDIff = diff;
    }
  }
  return minDIff;
}

const input = [3, 4, 1, 9, 56, 7, 9, 12];
const m = 5;
const output = chocoDis(input, m);
console.log(output);
