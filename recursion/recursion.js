//Udemy JS Algorithms course
//what is recursion? 
//process (ie function) that calls itself
//ie JSON.parse/JSON.stringify; document.getElementById and DOM traversal algorithms
//the call stack --> FIFO (with recursion it pushes new functions on the call stack and the function gets popped off one at a time from the top)
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

