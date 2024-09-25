// JavaScript provides a wide range of string methods that help you manipulate and work with strings.
// Here's a detailed explanation of the most common string methods in JavaScript:

// 1. length
// Description: Returns the length (number of characters) of a string.
// let str = "Hello, World!";
// console.log(str.length); // Output: 13



// 2. carAt(index)
// Description: Returns the character at the specified index in a string.
// let str = "Hello, World!";
// console.log(str.charAt(0)); // Output: "H"
// console.log(str.charAt(7)); // Output: "w"



// 3. concat(string2, string3, ...)
// Description: Concatenates two or more strings.
// let str = "Hello, ";
// let str2 = "World!";
// console.log(str.concat(str2)); // Output: "Hello, World!"



// 4.indexOf(substring, start)
// Description: Returns the index of the first occurrence of a substring in a string.
// let str = "hewlllo N-pass";
// console.log(str.indexOf("N-pass")); // Output: 7



// 5. includes(substring, position);
// Description: Returns true if a string contains a specified substring.
// let str = "Hello, World! Hello, JavaScript!";
// console.log(str.lastIndexOf(" World!")); // Output: 7



// 5. startsWith(substring, position)
// Description: Returns true if a string starts with a specified substring.
// let str = "Hello, World!";
// console.log(str.startsWith("Hello")); // Output: true



// 6. endsWith(substring, position)
// Description: Returns true if a string ends with a specified substring.
// let str = "Hello, World!";
// console.log(str.endsWith("World!")); // Output: true



// 7. slice(start, end)
// Description: Extracts a part of a string and returns a new string.
// let str = "Hello, World!";
// console.log(str.slice(7, 12)); // Output: "World"
 


// 8. substring(start, end)
// Description: Extracts a part of a string and returns a new string.
// let str = "Hello, World!";
// console.log(str.substring(7, 12)); // Output: "World"



// 9. substr(start, length)
// Description: Extracts a part of a string and returns a new string.
// let str = "Hello, World!";
// console.log(str.substr(7, 5)); // Output: "World"




// 10. replace(searchValue, replaceValue)
// Description: Replaces all occurrences of a substring in a string with a new substring.
// let str = "Hello, World!";
// console.log(str.replace("World", "JavaScript")); // Output: "Hello, JavaScript!"



// 11. toLowerCase()
// Description: Converts a string to lowercase.
// let str = "Hello, World!";
// console.log(str.toLowerCase()); // Output: "hello, world!"



// 12. toUpperCase()
// Description: Converts a string to uppercase.
// let str = "Hello, World!";
// console.log(str.toUpperCase()); // Output: "HELLO, WORLD!"



// 13. trim()
// Description: Removes whitespace from both ends of a string.
// let str = "   Hello, World!   ";
// console.log(str.trim()); // Output: "Hello, World!"



// 14. trimStart()
// Description: Removes whitespace from the beginning of a string.
// let str = "   Hello, World!";
// console.log(str.trimStart()); // Output: "Hello, World!"



// 15. trimEnd()
// Description: Removes whitespace from the end of a string.
// let str = "Hello, World!   ";
// console.log(str.trimEnd()); // Output: "Hello, World!"



// 16. split(separator, limit)
// Description: Splits a string into an array of substrings.
// let str = "Hello, World!";
// console.log(str.split(",")); // Output: ["Hello", " World!"]



// 17. repeat(count)
// Description: Repeats a string a specified number of times.
// let str = "Hello, World!";
// console.log(str.repeat(3)); // Output: "Hello, World!Hello, World!Hello, World!"



// 18. valueOf()
// Description: Returns the primitive value of a string.
// let str = "Hello, World!";
// console.log(str.valueOf()); // Output: "Hello, World!"



// Example : Combining Methods
// let str = " Sujjal Khadka learns javascript!!   ";
// let result = str.trim().toUpperCase().replace("LEARNS", "LEARNED").split(",");
// console.log(result);