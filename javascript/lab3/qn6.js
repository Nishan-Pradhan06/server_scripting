let num = [1, 2, 5, 3, 6, 4, 7, 4, 9, 8];
let even = [];

num.forEach((num) => {
    if (num % 2 === 0) {
        even.push(num);
    }
})

console.log(even); 