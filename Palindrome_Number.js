/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let origN = x
    if(x<0) return false
    if(x>=0 && x<9) return true
    let n=0,i=1
    while(x){
       n = n + (x%10)* Math.pow(10,Math.floor(Math.log10(x)))
       x = Math.floor(x/10)
    }
    return n == origN
};



/*
Input: 121
Output: true

Input: -121
Output: false

Input: 10
Output: false
*/
