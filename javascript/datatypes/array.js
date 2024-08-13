
const numbers = [
    10, 20, 30, 40, 50
]
//removing the last numbers
numbers.pop();
console.log("\n")
console.log("Array after remoing last numbers\n")
console.log(numbers);

// using splice methond to add
numbers.splice(2, 0, 60, 70);
console.log("\n")
console.log("Final Array\n")
console.log(numbers)




//1
const fruits = [
    "apple", "banana", "cherry", "date", "elderberry",
]
fruits.splice(3)
console.log(fruits)

fruits.splice(3, 0, "gh", "ghrapes")
console.log(fruits)



//2
const num = [1, 2, 3, 4]
num.push(5, 6)
console.log(num)


num.slice(0, 3);
console.log(num)