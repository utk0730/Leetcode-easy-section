var flipAndInvertImage = function(A) {
    for(let i=0;i<A.length;i++){
       A[i] =  A[i].map(x => 1 - x).reverse()
    }
   return A
};
