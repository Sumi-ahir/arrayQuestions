//Remove duplicate value from array
let syncPrompt=require("prompt-sync")();
let n=Number(syncPrompt("How many Element's you want to Enter :"));
let arr=[];
//to enter dynamic arr elements
for(let i=0;i<n;i++){
    let element=Number(syncPrompt(`Enter a Element ${i+1} :`));
    arr.push(element);
}
// let arr=[1,1,1,2,2,2,3,3,4,6,8];
let uniqArr=[];
    //print or check the uniqArr element
for(let i=0;i<arr.length;i++){
        isDuplicate=false;
    //print or check the uniqArr element
    for(let j=0;j<uniqArr.length;j++){
        if(arr[i]===uniqArr[j]){
            isDuplicate=true;
            break;
        }
    } if(!isDuplicate){
            uniqArr.push(arr[i]);
        }
}console.log(uniqArr);
