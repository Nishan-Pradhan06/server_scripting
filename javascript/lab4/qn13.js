// Write a javascript program to create an array of objects representing students
// where each object has a name and age property.Use the map() method to
// create a new array containing only the ages of the students.Print the new array.

// Array of student objects
const students = [
    { name: "nishan", age: 21 },
    { name: "shanti", age: 20 },
    { name: "alina", age: 19 },
    { name: "pamela", age: 19 },
];

const agesArray = students.map(function (student) {
    return student.age;
});

console.log(agesArray);
