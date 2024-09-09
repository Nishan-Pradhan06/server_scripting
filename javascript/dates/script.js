//creating date objects

let currentDate = new Date();
console.log(currentDate);  // Returns the current date and time

let specificDate = new Date(2024, 8, 9);  // September 9, 2024
console.log(specificDate);

let dateFromString = new Date("September 9, 2024");
console.log(dateFromString);


let epochDate = new Date(0);  // Returns Jan 1, 1970
console.log(epochDate)

//dates method in js
//getDate
let date = new Date();
console.log(date.getDate());  // Output: Day of the month (e.g., 9)

//get month
let getMonthDate = new Date();
console.log(getMonthDate.getMonth());  // Output: Month (0 = January, 1 = February, etc.)

//get year
let dates = new Date();
console.log(dates.getFullYear());  // Output: Full year (e.g., 2024)

//hours
let hrsDate = new Date();
console.log(hrsDate.getHours());  // Output: Hour (0 to 23)

///minutes
let minDate = new Date();
console.log(minDate.getMinutes());  // Output: Minutes (0 to 59)

//seconds
let secDate = new Date();
console.log(secDate.getSeconds());  // Output: Seconds (0 to 59)


//getday

let dayDate = new Date();
console.log(dayDate.getDay());  // Output: Day of the week (0 = Sunday, 1 = Monday, etc.)
