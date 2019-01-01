var sortArrayByParity = function(A) {
    return A.filter(e=> e%2 ==0).concat(A.filter(e=> e%2 !=0))
};
