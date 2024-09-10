// Write a javascript program to create an array of objects representing books,
//     where each object has a title and author property.Use splice() to remove the
// second book from the array.Print the modified array.
const books = [
    { title: "cs", author: "manish sir" },
    { title: "web", author: "saroj sir" },
    { title: "js", author: "Saroj sir" }
];

books.splice(1, 1);
console.log(books);
