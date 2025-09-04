//Find the second largest element in an array.
let prompt=require("prompt-sync")();
let k=Number(prompt("how element you anter : "));
let arr=[];

for(let i=0;i<k;i++){
    let element=Number(prompt(`Enter an Element ${i+1} : `));
    arr.push(element);
}
let max1=Math.max(arr[0],arr[1]);
let max2=Math.min(arr[0],arr[1]);

for(let i=0;i<=arr.length;i++){
    if(arr[i]>max1){
        max2=max1;
        max1=arr[i];
    }else if(arr[i]>max2 && arr[i]!=max1){
        max2=arr[i]
    }
}console.log(max2);


