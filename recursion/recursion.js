//Udemy JS Algorithms course
//what is recursion? 
//process (ie function) that calls itself
//ie JSON.parse/JSON.stringify; document.getElementById and DOM traversal algorithms
//the call stack --> FIFO (with recursion it pushes new functions on the call stack and the function gets popped off one at a time from the top)
//beware stack overflow when your recursion is not stopping (YOU NEED A BASE CASE!)
//we need a base case --> condition when the recursion ends

//example 1
function countDown(num) {
    // base case
    if (num <= 0) {
        console.log("All done!");
        return;
    }
    console.log(num);
    //decrements num by 1
    num--;
    //this function recursively calls itself with the newly decremented num
    countDown(num);
}

console.log(countDown(5));

//example 2
function sumRange(num) {
    //base case
    if (num === 1) return 1;
    //return the num plus calling itself with one less than num (will run until reaches base case)
    return num + sumRange(num - 1);
}

console.log(sumRange(3));

//example 3
function factorial(num) {
    //base case
    if (num === 1) return 1;
    return num * factorial(num - 1);
}
console.log(factorial(3))

//helper method recrusion
function collectOddValues(arr) {
    let result = [];

    //this is our helper method that takes in an array (a helper method will help us keep track of what's in the results array, otherwise with each iteration the result array will be reset --> need to declare result outside of this helper method)
    function helper(helperInput) {
        //if the array is empty, return
        if (helperInput.length === 0) {
            return;
        }

        //if the first value is odd, add it to the result array
        if (helperInput[0] % 2 !== 0) {
            result.push(helperInput[0])
        }

        //this function will call itself while excluding the first value in the array, but basically passing in a subarray with the remaining values until there are no more values in the subarray
        helper(helperInput.slice(1));
    }

    //calling the function helper and passing in the array from the outer function
    helper(arr);

    return result;
}

