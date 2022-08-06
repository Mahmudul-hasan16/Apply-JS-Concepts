function even(num1) {
    const even = num1 % 2;
    if (even == 0) {
        return true;
    }
    else {
        return false;
    }
}

const myNumber = even(23);
console.log(myNumber)
const herNumber = even(30);
console.log(herNumber);
