
function Factorials(num) {
    let result = 1;
    for (let i = num; i >= 1; i--) {
        result = result * i;
    }
    return result;
}

let result = Factorials(4);
console.log(result);