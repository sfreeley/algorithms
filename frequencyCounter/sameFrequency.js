//Udemy JavaScript Algorithm practice course
//write a function called sameFrequency; 
//given two positive integers, find out if the two numbers have the same frequency of digits
//must be O(N) time

const sameFrequency = (num1, num2) => {
    let num1String = num1.toString();
    console.log(num1String);
    let num2String = num2.toString();
    if (num1String.length !== num2String.length) return false;

    let numFreq1 = {};
    let numFreq2 = {};

    for (let num of num1String) {
        numFreq1[num] = ++numFreq1[num] || 1
    }

    for (let num of num2String) {
        numFreq2[num] = ++numFreq2[num] || 1
    }

    for (let key in numFreq1) {
        if (!key in numFreq2) {
            return false;
        }
        if (numFreq1[key] !== numFreq2[key]) {
            return false;
        }
    }
    return true;


}
console.log(sameFrequency(1234, 32100))