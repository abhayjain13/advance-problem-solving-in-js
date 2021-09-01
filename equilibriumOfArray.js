const input = [-7, 1, 5, 2, -4, 3, 0];

function equilibriumOfArray(arr) {
  if (arr.length < 3) return;

  const totalSum = eval(input.join("+"));

  const sumArr = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    sumArr.push(sumArr[i - 1] + arr[i]);
  }

  for (let i = 1; i < arr.length - 1; i++) {
    const leftSum = sumArr[i] - arr[i];
    const rightSum = totalSum - sumArr[i];
    if (leftSum === rightSum) return i;
  }
  return null;
}

const output = equilibriumOfArray(input);
console.log(output);
