// LINEAR SEARCH PSEUDOCODE

// this function accepts an array and a value
// loop through array and check if the current array element is equal to the value
// if it is return the index at which the element is found
// if the value is never found, return -1

function linear (arr, val) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === val) {
            return i
        } 
        return -1 
        // still in for loop
    }
}

function linearSearch(arr, val){
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === val) {
            return i
        }
    }
    return -1
  }

// linearSearch([10, 15, 20, 25, 30], 15)
// linearSearch([100], 100)
// linearSearch([1, 2, 3, 4, 5], 6)