let str = "hello me";
let reverseString = "";
let i = str.length - 1;
do {
    reverseString += str[i];
    i--;

} while (i >= 0);
console.log(reverseString);