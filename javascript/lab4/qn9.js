// Write a javascript program to create an array of strings and use map() to create a
// new array where each string is capitalized.Print the new array.

const str = ["sunday", "monday", "tues", "wed", "thrus", "frid", "sat"];
const capitalizedArray = str.map(function (str) {
    return str[0].toUpperCase() + str.slice(1);
});
console.log(capitalizedArray)