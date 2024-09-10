// Write a javascript program to create an array of strings and use the filter()
// method to filter out strings that start with the letter
//     &#39; A &#39;. Print the filtered array.

const str = ["web", "dsa", "math", "english", "operating System", "April","Array"];

const filteredArray = str.filter(function (str) {
    return str[0] == 'A';
});

console.log(filteredArray);
