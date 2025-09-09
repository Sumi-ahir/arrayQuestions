//WITHOUT USING SORT()
function firstMissing(num){
    let n=num.length;

    for(let i=0;i<n;i++){
        while(num[i]>0 && num[i]<=n && num[num[i]-1] !==num[i]){
            let temp=num[num[i]-1] ;
            num[num[i]-1] =num[i];
            num[i]=temp;
        }
    }
    for(let i=0;i<n;i++){
        if(num[i]!=i+1){
            return i+1;
        }
    }return n+1;
}
console.log(firstMissing([3,4,2,-1,1]));