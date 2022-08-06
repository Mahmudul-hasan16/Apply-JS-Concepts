function milesToKilometer(miles) {
    const kilometer = miles * 1.609;
    return kilometer;
}

const amrMiles = 2;
const amrKilometer = milesToKilometer(amrMiles);
console.log(amrKilometer);