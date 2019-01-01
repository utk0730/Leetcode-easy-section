var repeatedNTimes = function(A) {
    let obj = {},found=false,i=0
    while(i<A.length){
        obj[A[i]] ? found=true : obj[A[i]]=1
        if(found) break;
        i++
    }
    return A[i]
    
};
