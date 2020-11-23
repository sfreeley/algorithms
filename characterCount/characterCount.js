//Udemy JavaScript Algos Course: algorithm practice with counting number of characters in a string
//write a function which takes in a string and returns counts of each character in the string
//ignore the characters that are not alpha-numeric
const charCount = (str) => {
    //declare an object called frequency which will store all the key value pairs (key = alpha-numeric, lowercase letter; value = frequency that the letter appears in the string)
    const frequency = {}
    //convert all characters in the string to lowercase
    let characters = str.toLowerCase();
    //loop through the string and make sure to also verify that the characters in the string are alpha-numeric with a regular expression
    for (let char of characters) {
        //test if the individual character is alpha-numeric, if it is...
        if (/[a-z0-9]/.test(char)) {
            //if that specific character is already in the object as a key, increment the count
            //if that specific character is not in the object as a key, set it equal to 1
            frequency[char] = ++frequency[char] || 1;
        }
    }
    //return the object with all the counts of each character in the string that is alpha-numeric
    return frequency;
}
console.log(charCount("Hello!!! There, Man! oooo"))