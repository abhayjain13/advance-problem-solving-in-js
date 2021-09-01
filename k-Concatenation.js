function maxSubArr(arr) {
  let currentBest = {
    sum: arr[0],
    arr: [arr[0]],
  };
  let overAllBest = { ...currentBest };

  for (let i = 1; i < arr.length; i++) {
    const element = arr[i];
    if (currentBest.sum >= 0) {
      currentBest.sum += element;
      currentBest.arr.push(element);
    } else {
      currentBest.sum = element;
      currentBest.arr = [element];
    }
    if (overAllBest.sum < currentBest.sum) {
      overAllBest.sum = currentBest.sum;
      overAllBest.arr = [...currentBest.arr];
    }
  }
  return overAllBest;
}

function kConCat(input, k) {
  const sum = eval(input.join("+"));
  if (sum > 0) {
    const arr = maxSubArr([...input, ...input]);
    const total = arr.sum + (k - 2) * sum;
    return total;
  } else {
    const arr = maxSubArr([...input, ...input]);
    return arr.sum;
  }
}

const input = [1, -2, -6, 7, 4];
const k = 5;

console.log(kConCat(input, k));
