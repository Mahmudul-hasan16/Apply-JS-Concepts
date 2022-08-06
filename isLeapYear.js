function isLeapYear(year) {
    const reminder = year % 4;
    if (reminder == 0) {
        // console.log('Your year is leap year : ', year);
        return true;
    }

    else {
        // console.log('Your year is not leap year : ', year);
        return false;
    }
}

const isMyYear = isLeapYear(2021);
console.log('Is leap year : ', isMyYear);
