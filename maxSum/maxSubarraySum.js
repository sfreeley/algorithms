//write a function called maxSubarraySum which:
// accepts array of integers and a number called num
//function should calculate the maximum sum of num consecutive elements in the array

const maxSubarraySum = (arr, num) => {
    //edge case; not possible if the array length is less than the num you want to sum so return null;
    if (arr.length < num) return null;

    //currentSum will hold the current sum of num numbers
    let currentSum = 0;

    //maxSum will hold the new sum
    let maxSum = 0;

    //loop through the array, but only iterate through the index of num
    for (let i = 0; i < num; i++) {
        //add to the max sum with each value at index num of the iteration until num is reached 
        //(indices: 0, 1, 2 with corresponding values of array below: -1, 0, 1)
        maxSum += arr[i]
    }
    //set currentSum to equal the maxSum at this point (maxSum at this point will be the first 3 values in the array)
    currentSum = maxSum

    //start looping through the array, but start at num instead of the beginning of the array
    for (let i = num; i < arr.length; i++) {
        //current sum will then be the currentSum MINUS the first value of the 3 value "window" PLUS the next index's value (ie subtract -1, add 2 and so on with each iteration )
        //this creates a 'sliding window', which takes the current tempSum and subtracts the value at the first index in the sum sequence and then "moves" the window
        currentSum = currentSum - arr[i - num] + arr[i];
        //compare the maxSum with the currentSum; if the maxSum is greater than the currentSum, take that value
        //otherwise, just keep maxSum the same value
        maxSum = Math.max(maxSum, currentSum)
    }
    //return maxSum;
    return maxSum;
}

console.log(maxSubarraySum([-1, 0, 1, 2, 3, 4, 5], 3))