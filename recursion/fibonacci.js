//write a recursive function called fib which accepts a number
//and returns the nth number in the Fibonacci sequence (ie 1, 1, 2, 3, 5, 8...) where it starts with 1 and 1
//and every number after that is equal to the sum of the previous two numbers

const fib = (n) => {
    if (n === 0) return 0;
    if (n === 1 || n === 2) return 1
    return fib(n - 2) + fib(n - 1)
}
console.log(fib(28))