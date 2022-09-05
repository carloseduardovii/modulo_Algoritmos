const shellSort = (array) => {
  const gap = array.length;
  let p = 1;

  while (p < gap / 3) {
    p = 3 * p + 1;
    // console.log(p);
  }

  while (p >= 1) {
    for (let i = p; i < gap; i++) {
      for (let j = i; j >= p && array[j] < array[j - p]; j -= p) {
        [array[j], array[j - p]] = [array[j - p], array[j]];
      }
    }
    p = (p - 1) / 3;
  }
  return array;
};

const array = [22, 45, 3, 12, 31, 10, 5, 1, 18];
const result = shellSort(array);
console.log(result);
