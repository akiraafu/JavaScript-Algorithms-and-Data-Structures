function binarySearch(arr, val) {
  // add whatever parameters you deem necessary - good luck!
  let left = 0;
  let right = arr.length - 1;
  let middle = Math.floor((left + right) / 2);

  if (arr[middle] === val) {
    return middle;
  }

  while (arr[middle] !== val && left <= right) {
    if (arr[middle] > val) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
    middle = Math.floor((left + right) / 2);
  }
  return arr[middle] === val ? middle : -1;
}
