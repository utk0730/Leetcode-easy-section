/*
 * @param {number} x
 * @return {number}
 */

 //time complexity O(n)

var reverse = function(x) {
    if(x==0) return 0
   let y = x
    let arr =[]
    while(x){
        arr.push(Math.floor(x%10))
        x = Math.floor(Math.abs(x)/10)
    }
    x = parseInt(arr.join(''))
     if(Math.abs(x) > Math.pow(2,31)) return 0           
    if(y<0 && arr[0]==0) return -x
    else return x
    
};