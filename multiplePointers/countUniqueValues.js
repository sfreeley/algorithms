//Udemy- JavaScript algorithm practice
//implement a function called countUniqueValues
//accepts sorted array, and counts the unique values of the array
//there can be negative numbers in the array, but it will always be sorted (O(N) time)git

const countUniqueValues = (arr) => {
    //as edge case, if the array is empty, return 0;
    if (arr.length === 0) return 0;
    //set the left pointer equal to 0 to start from the beginning;
    let leftPointer = 0;
    //loop through the array with j acting as the right pointer starting at the index after the leftPointer -->
    //only 1 pointer moves at a time; left pointer moves only if the values being compared are unique; otherwise, right pointer moves
    //our left pointer keeps track of the unique values that we come across and acts as our counter;
    for (let j = 1; j < arr.length; j++) {
        //if the value at the left pointer does not match the value at the right pointer...
        if (arr[leftPointer] !== arr[j]) {
            //increment the left pointer
            leftPointer++
            //allow the value of the left pointer to now equal the value at the right

            arr[leftPointer] = arr[j]
        }
        //if the values are the same at each pointer, it goes back into the loop and j increments until it reaches the end of the array
    }
    //return the count for each unique value in the array (+ 1 because we start at 0)
    return leftPointer + 1
}
console.log(countUniqueValues([0, 1, 2, 3, 4, 4, 5]))

//using while loop -- Brett's approach
function countUniqueValues2(array) {
    // add whatever parameters you deem necessary - good luck!
    let i = 0
    let j = 1
    while (j < array.length) {
        if (array[i] !== array[j]) {
            i++
            array[i] = array[j]
        }
        else {
            j++
        }
    }
    return i + 1;
}
