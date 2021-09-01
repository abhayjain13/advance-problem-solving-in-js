/*
    Invert Input arrry and use kadance to get min array
    and then add it to total sum value
*/

const input = [-1, 40, -14, 7, 6, 5, -4, -1];

function maxSubArr(arr) {
  let currentBest = {
    sum: -arr[0],
    arr: [-arr[0]],
  };
  let overAllBest = { ...currentBest };

  for (let i = 1; i < arr.length; i++) {
    const element = -arr[i];
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

const minSubArr = maxSubArr(input);
const totalSum = eval(input.join("+"));

console.log(totalSum + minSubArr.sum);
