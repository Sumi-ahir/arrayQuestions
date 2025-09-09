// non-decreasing array check
let syncPrompt = require("prompt-sync")();
let n = Number(syncPrompt("How many elements you want to enter? :"));
let arr = [];
for (let i = 0; i < n; i++) {
    let elements = Number(syncPrompt(`Enter an element ${i + 1} :`));
    arr.push(elements);
}

function checkPossibility(num) {
    let modification = 0;
    for (let i = 0; i < num.length - 1; i++) {
        if (num[i] > num[i + 1]) {
            if (modification++ > 0) {
                return false; 
            }
            if (i === 0 || num[i - 1] <= num[i + 1]) {
                num[i] = num[i + 1];
            } else {
                num[i + 1] = num[i];
            }
        }
    }
    return true;   
}

console.log(checkPossibility(arr));
