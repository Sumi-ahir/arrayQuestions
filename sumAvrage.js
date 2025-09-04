//Find the sum and average of all elements in the array.
let prompt=require("prompt-sync")();
let k=Number(prompt("how element you Enter : "));
let arr=[];

for(let i=0;i<k;i++){
    let element=Number(prompt(`Enter an Element ${i+1} : `));
    arr.push(element);
}
let sum=0;
for(let i=0;i<arr.length;i++){
    sum=sum+arr[i];    
}
let avg=sum/arr.length;
console.log(`the sum of given element is : ${sum}`);
console.log(`the avrage of the sum is : ${avg}`);

