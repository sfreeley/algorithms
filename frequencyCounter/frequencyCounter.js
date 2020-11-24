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
        freqCounter1[num] = ++freqCounter1[num] || 1;
    }

    //we need to loop through the second array
    for (let num of arr2) {
        freqCounter2[num] = ++freqCounter2[num] || 1;
    }

    //we need to then find out if the keys match in each object
    for (let key in freqCounter1) {
        //if the key^2 does not exist in freqCounter2, we know we have to return false because there needs to be a key that equals key^2 in freqCounter2
        if (!(key ** 2) in freqCounter2) {
            return false;
        }
        //if the value (ie frequnecy) of the key in freqCounter1 does not equal the value (ie frequency) of the key^2 in freqCounter2, return false
        if (freqCounter1[key] !== freqCounter2[key ** 2]) {
            return false;
        }
    }
    //otherwise, return true;
    return true;

}

console.log(same([1, 2, 3], [4, 9, 1]))