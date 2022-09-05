const mergeSort = (array) => {
  if (array.length < 2) {
    return array;
  }

  const half = parseInt(array.length / 2) || 0;

  const left = array.slice(0, half);

  const right = array.slice(half);
  const merge = (left, right) => {
    const result = [];
    let iLeft = (iRight = 0);

    while (iLeft < left.length && iRight < right.length) {
      result.push(
        left[iLeft] < right[iRight] ? left[iLeft++] : right[iRight++]
      );
    }

    return [...result, ...left.slice(iLeft), ...right.slice(iRight)];
  };

  return merge(mergeSort(left), mergeSort(right));
};

const array = [22, 45, 3, 12, 31, 10, 5, 1, 18];
const result = mergeSort(array);
// console.log(result);
