// 1. Function to calculate the difference between two arguments
function calculateDifference(a, b) {
    return a - b;
}
console.log("Difference:", calculateDifference(10, 5));


// 2. Function to check if a number is odd
function isOdd(num) {
    return num % 2 !== 0;
}
console.log("Is odd?:", isOdd(3)); 
console.log("Is odd?:", isOdd(4)); 


// 3. Function to find the smallest number in an array
function findMin(arr) {
    return Math.min(...arr);
}
console.log("Smallest number in [5, 1, 8, -2]:", findMin([5, 1, 8, -2])); 


// 4. Function to filter even numbers from an array
function filterEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}
console.log("Even numbers in [1, 2, 3, 4, 5]:", filterEvenNumbers([1, 2, 3, 4, 5])); 


// 5. Function to sort an array of numbers in descending order
function sortArrayDescending(arr) {
    return arr.slice().sort((a, b) => b - a);
}
console.log("Array [1, 2, 3, 4, 5] sorted in descending order:", sortArrayDescending([1, 2, 3, 4, 5])); 


// 6. Function to convert the first letter of a string to lowercase
function lowercaseFirstLetter(str) {
    if (str.length === 0) return str;
    return str[0].toLowerCase() + str.slice(1);
}
console.log("Lowercase first letter ('NazMoon'):", lowercaseFirstLetter("NazMoon")); 


// 7. Function to find the average of an array of numbers
function findAverage(arr) {
    if (arr.length === 0) return 0;
    const sum = arr.reduce((acc, num) => acc + num, 0);
    return sum / arr.length;
}
console.log("Average of [1, 2, 3, 4, 5]:", findAverage([1, 2, 3, 4, 5])); 


// 8. Function to check if a year is a leap year
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}
console.log("Is 2024 a leap year?:", isLeapYear(2024)); 
console.log("Is 1900 a leap year?:", isLeapYear(1900)); 