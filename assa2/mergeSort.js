function merge(left, right) {
  let mergedArr = [];
  let countL = 0;
  let countR = 0;

  while ((countL < left.length, countR < right.length)) {
    if (left[countL] < right[countR]) {
      mergedArr.push(left[countL]);
      countL++;
    } else {
      mergedArr.push(right[countR]);
      countR++;
    }
  }

  console.log(mergedArr);
  return mergedArr.concat(left.slice(countL)).concat(right.slice(countR));
}

function mergeSort(input) {
  let mid = Math.round(input.length / 2);
  let leftSide = input.slice(0, mid);
  let rightSide = input.slice(mid);

  if (input.length === 1) {
    return input;
  } else {
    return merge(mergeSort(leftSide), mergeSort(rightSide));
  }
}

let x = [2, 7, 121, 134, 2, 22, 55, 5];

console.log(mergeSort(x));
