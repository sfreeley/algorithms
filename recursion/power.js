//write a function called power which accepts a base and an exponent
//function should return the power of the base to the exponent
//this function should mimic the functionality of Math.pow()

const power = (base, exp) => {
    if (base === 0) return 0;
    if (exp === 0) return 1;
    return base * power(base, (exp - 1))
}
console.log(power(2, 3))