// 1.Using splice to Modify Array: Create an array with the following elements: ["apple", "banana",
//     "cherry", "date", "elderberry"].Use the splice method to remove the element "cherry" and add
// "fig" and "grape" in its place.Display the modified array.

const fruits = [
    "apple", "banana", "cherry", "date", "elderberry",
]
fruits.splice(2, 1)
console.log(fruits)

fruits.splice(2,0, "fig", "ghrapes")
console.log(fruits)


// 2. Combining push and slice: Initialize an array with the numbers[1, 2, 3, 4].Use the push
// method to add two more numbers to the array.Then, use the slice method to create a new array
// that contains only the last three elements from the updated array.Display the new array.
console.log("\n")
const num = [1, 2, 3, 4]
num.push(5, 6)
console.log(num)

const lastThree = num.slice(-3);
console.log(lastThree)


// 3. Using shift and unshift: Start with an array of three different animal names.Use the shift
// method to remove the first animal and then use the unshift method to add a new animal at the
// beginning of the array.Display the updated array.
console.log("\n")
const animals = ["Lion", "Tiger", "Elephant"];

animals.shift();
console.log("Array after removing the first animal:");
console.log(animals); 

animals.unshift("Giraffe");
console.log("\nUpdated Array:");
console.log(animals); 







// 4. Using pop and splice: Create an array with the numbers[10, 20, 30, 40, 50].Use the pop
// method to remove the last number from the array.Then, use the splice method to replace the
// 2nd and 3rd numbers with the numbers 60 and 70. Display the final array.
console.log("\n")
const numbers = [
    10, 20, 30, 40, 50
]
//removing the last numbers
numbers.pop();
console.log("\n")
console.log("Array after remoing last numbers\n")
console.log(numbers);

// using splice methond to add
numbers.splice(1, 2, 60, 70);
console.log("\n")
console.log("Final Array\n")
console.log(numbers)



// 5. Using slice to Extract a Portion: Initialize an array with the names of several books.Use the
// slice method to extract a portion of the array starting from the 2nd index and ending at the 5th
// index.Display the extracted portion of the array.
console.log("\n")
const books = ["book1", "book2", "book3", "book4", "book5", "book6", "book7"]
const extractedBooks = books.slice(2, 5);
console.log(extractedBooks)

