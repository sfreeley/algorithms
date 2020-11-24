//Udemy- JavaScript algorithm practice
//frequency Counter valid Anagram
//given two strings, write a function to determine if the second string is an anagram of the first
//anagram = word, phrase, or name formed by rearranging letters of another (ie cinema ==> iceman)

const validAnagram = (str1, str2) => {
    //if the two string lengths don't match, return false because we know we can't make an anagram with different amount of characters in the two strings
    if (str1.length !== str2.length) return false;
    //declare two variables to hold the objects that will keep track of the frequency of the characters in each string
    let freqChar1 = {};
    let freqChar2 = {};

    //loop through the first string; if the character is already a key in the object, increment it; otherwise set it equal to 1
    for (let char of str1) {
        freqChar1[char] = ++freqChar1[char] || 1
    }

    //loop through the second string; if the character is already a key in the object, increment it; otherwise set it equal to 1
    for (let char of str2) {
        freqChar2[char] = ++freqChar2[char] || 1
    }

    console.log(freqChar1);
    console.log(freqChar2);

    //check to see if characters and frequencies match in both objects from above
    for (let key in freqChar1) {
        //if the key in freqChar1 is not in freqChar2 return false
        if (!key in freqChar2) {
            return false
        }
        //if the value in freqChar1 does not match a value in the freqChar2
        if (freqChar1[key] !== freqChar2[key]) {
            return false
        }
    }
    //otherwise return true;
    return true;

}
console.log(validAnagram("zaaayyy", "ayayayz"))