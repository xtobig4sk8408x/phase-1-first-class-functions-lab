const returnFirstTwoDrivers = drivers => drivers.slice(0, 2);
const returnLastTwoDrivers = drivers => drivers.slice(-2);
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(num1) {
    return function(num2) {
        return num1 * num2;
    }
}

const fareDoubler = num => (num * 2);
const fareTripler = num => (num * 3);

function selectDifferentDrivers(returnFirstTwoDrivers, returnLastTwoDrivers) {
    return returnLastTwoDrivers(returnFirstTwoDrivers);
}