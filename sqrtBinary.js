//find squareRoot using Binary Search Method 
function sqrtBinary(num){

    let start=0,end=num,ans=0;
    while(start<=end){
        let mid=Math.floor((start+end)/2);

        if(mid*mid===num) return `${mid} is a squareroot of ${num}`
        if(mid*mid <num){
            ans=mid;
            start=mid+1;
        }else{
            end=mid-1;
        }
    }return ans;
}console.log(sqrtBinary(8));
console.log(sqrtBinary(65));
console.log(sqrtBinary(5));