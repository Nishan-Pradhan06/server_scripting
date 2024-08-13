const passMarks = 24;
const fullMarks = 60;
let obtanedMarks = 60;

if (obtanedMarks > fullMarks) {
    console.log("Invalid marks! Please enter a value between 0 and 60.");
}
else if (obtanedMarks >= 55) {
    console.log("Your grade is A+");
}
else if (obtanedMarks >= 50) {
    console.log("Your grade is A");
}
else if (obtanedMarks >= 45) {
    console.log("Your grade is B+");
}
else if (obtanedMarks >= 35) {
    console.log("Your grade is B");
}
else if (obtanedMarks >= 30) {
    console.log("Your grade is C+");
}
else if (obtanedMarks >= 25) {
    console.log("Your grade is C");
}
else {
    console.log("You are Failed. Better Luck Next Time");
}
