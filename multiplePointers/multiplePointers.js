//write a function called sumZero which accepts a SORTED array of integers
//the function should find the first pair where the sum is 0
//return an array that includes both values that sum to zero 
//or undefined if a pair does not exist

const sumZero = (arr) => {
    //left pointer
    let leftPointer = 0;
    //right pointer (will be the last value in the array, which is always 1 less than the length)
    let rightPointer = arr.length - 1
    //loop through the array as long as left pointer is less than right pointer (they cannot overlap otherwise if there is a 0 as a value, 0 + 0 is always 0)
    while (leftPointer < rightPointer) {
        //sum variable will equal the value at the left pointer plus the value at the right pointer
        let sum = arr[leftPointer] + arr[rightPointer];
        if (sum === 0) {
            //if the sum is equal to 0, return the array with the two values that add up to 0;
            return [arr[leftPointer], arr[rightPointer]];
        }
        else if (sum > 0) {
            //if the sum is greater than 0, we know we need to move the right pointer left by 1
            rightPointer--;
        }
        else {
            //otherwise you know that it is less than 0 and the left pointer needs to increment by 1
            leftPointer++;
        }
    }
}

console.log(sumZero([-4, 0, 1, 2, 3, 4]))


