const numbers = [12, 23, 345, 56, 67];
const evenFun = (value) => {
    if (value % 2 == 0) {
        console.log(value)
    }
}
const number2 = numbers.map(evenFun);