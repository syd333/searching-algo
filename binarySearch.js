// much faster form of search
// only works on sorted arrays

//BINARY SEARCH PSEUDOCODE

// function accepts a sorted array and a value
// create a left pointer at the start of array
// right pointer at the end of the array
// while the left pointer comes before the right pointer:
// create a pointer in the middle
// if you find the value you want, return the index
// if the value is too small, move the left pointer up
// if the value is too large, move the right pointer down
// if you never find the value, return -1

function binarySearch(arr, val) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);
  while (arr[middle] !== val && start <= end) {
    if (val < arr[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
    middle = Math.floor((start + end) / 2);
  }
  if (arr[middle] === val) {
      return middle
  }
  return - 1;
}

function binarySearchRefactor(arr, val) {
    let start = 0;
    let end = arr.length - 1;
    let middle = Math.floor((start + end) / 2);
    while (arr[middle] !== val && start <= end) {
      if (val < arr[middle]) end = middle - 1; 
      else start = middle + 1;
      middle = Math.floor((start + end) / 2);
    }
    return arr[middle] === val ? middle : -1;
  }

binarySearch(
  [5, 6, 10, 13, 14, 18, 30, 34, 25, 37, 40, 44, 64, 79, 84, 86],
  100
); // -1
binarySearch(
  [
    5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
    99,
  ],
  10
); // 2
