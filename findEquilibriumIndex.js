//find EquilibriumIndex from array
// let syncPrompt = require("prompt-sync")();
// let n = Number(syncPrompt("How many elements you want to enter? :"));
// let arr = [];
// for (let i = 0; i < n; i++) {
//     let elements = Number(syncPrompt(`Enter an element ${i + 1} :`));
//     arr.push(elements);
// }

function findEquilibriumIndex(arr){
let totalSum=0;
for(let i=0;i<arr.length;i++){
    totalSum+=arr[i];
}
let leftSum=0;
for(let i=0;i<arr.length;i++){
    if(leftSum===totalSum-leftSum-arr[i]){
        return `EquilibriumIndex is ${i}`;
    }
    leftSum+=arr[i];
}
return "No EquilibriumIndex Found !"
}
console.log(findEquilibriumIndex([1,3,5,2,2]));
