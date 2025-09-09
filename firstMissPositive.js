//first missing positive integer from array

//USING SORT()
function firstMissing(arr){
    arr.sort((a,b)=>a-b);
    let ans=1;
    for(let i=0;i<arr.length;i++){

        if(arr[i]===ans){
            ans++;
        }
    } 
    return ans;
}
console.log(firstMissing([3,4,-1,1]));

//WITHOUT USING SORT()
function firstMissing(num){
    let ans=1;
}
