// factorial in normal way in while loop 

// function factorial(number) {
//     let num = 1;
//     let result = 1;
//     while (num <= 7) {
//         result = result * num;
//         num++;
//     }
//     return result;
// }

// const number = 7;
// const fact = factorial(number);
// console.log(fact);



// factorial in reverse way 

function factorial(number) {
    let i = 7;
    let result = 1;
    while (i >= 1) {
        result = result * i;
        console.log(i);
        i--;

    }
    return result;
}

const number = 7;
const fact = factorial(number);
console.log(fact);