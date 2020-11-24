//Udemy- JavaScript algorithms
//uses objects or sets to collect values/frequencies of values (usually O(N) time)
//write a function called same, which accepts two arrays;
//function should return true if every value in the array has its corresponding value squared in the second array
//frequency value must be the same

const same = (arr1, arr2) => {
    //if the two lengths of the arrays are not the same, we know it cannot be true (frequencies cannot be the same)
    if (arr1.length !== arr2.length) return false
    //declare the variables to hold the object that will hold the key value pairs of the numbers in the and their frequencies in each array
    let freqCounter1 = {};
    let freqCounter2 = {};
    //we need to loop through the first array
    for (let num of arr1) {

    }
}