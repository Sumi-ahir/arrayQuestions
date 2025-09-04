//Separate even and odd numbers from an array.
let prompt=require("prompt-sync")();
let k=Number(prompt("how element you Enter : "));
let arr=[];

for(let i=0;i<k;i++){
    let element=Number(prompt(`Enter an Element ${i+1} : `));
    arr.push(element);
}
let odd=[],even=[];
for(let i=0;i<arr.length;i++){
    if(arr[i]%2===0){
        even.push(arr[i]);
    }else{
         odd.push(arr[i]);
    }
}console.log(`Odd Number : ${odd}`);
console.log(`Even Number : ${even}`);
