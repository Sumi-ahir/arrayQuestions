function squareRoot(num){
    let ans=1;

    for(let i=0;i<num;i++){
        if(i*i==num) return `${i} is a squaretoot of ${num}`
        else if(i*i < num) { ans=i; } 
       else break; 
    }return ans;
}console.log(squareRoot(13));
