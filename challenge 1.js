const arr1 = [10, 70, 80, 30, 500];

const arrFunc = (arr1, k) => {
  arr1.sort((a, b) => a - b);
  let arr2 = arr1.slice(0, k);

  return arr2;
};
const arr2 = arrFunc(arr1, 4);
const smallestNum = arr2[0];
const largestNum = arr2[arr2.length - 1];
const smallestPossibleNum = largestNum - smallestNum;
console.log(smallestPossibleNum);
