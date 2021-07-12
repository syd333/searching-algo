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