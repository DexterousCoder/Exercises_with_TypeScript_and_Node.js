"use strict";
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let number of numbers) {
    let ordinalEnding;
    if (number === 1) {
        ordinalEnding = "st";
    }
    else if (number === 2) {
        ordinalEnding = "nd";
    }
    else if (number === 3) {
        ordinalEnding = "nd";
    }
    else {
        ordinalEnding = "th";
    }
    console.log(`${number}${ordinalEnding}`);
}
