function search(array, val) {
  let min = 0;
  let max = array.length - 1;

  while (min <= max) {
    let middle = math.floor((min + max) / 2);
    let currentElement = array[middle];

    if (array[middle] < val) {
      min = middle + 1;
    }

    if (array[middle] > val) {
      max = middle - 1;
    }

    if (array[middle] === val) {
      return middle;
    }
  }

  return -1;
}
