//rotate an array by k element
 let syncPrompt=require("prompt-sync")();
let n=Number(syncPrompt("How many elements you want to enter? :"));
var arr=[];
for(let i=0;i<n;i++){
    let elements=Number(syncPrompt(`Enter an element ${i+1} :`));
    arr.push(elements);
}
//var arr=[1,2,3,4,5];
let k=syncPrompt("enter Kth Element :");
k=k%arr.length;
for(let i=0;i<k;i++){
        let copy=arr[0];
    for(let i=0;i<arr.length-1;i++){
         arr[i]=arr[i+1];
    }arr[arr.length-1 ]=copy;  
}

    console.log(arr);


//right rotation
        var arr=[1,2,3,4,5];
        let copy1=arr[arr.length-1];
    for(let i=arr.length-1;i>0;i--){
         arr[i]=arr[i-1];
    }arr[0]=copy1;  
  console.log(arr);



//left rotation
        var arr=[1,2,3,4,5];
        let copy=arr[0];
    for(let i=0;i<arr.length-1;i++){
         arr[i]=arr[i+1];
    }
    arr[arr.length-1]=copy;
  console.log(arr);

