var isPalindrome = function(s) {
        let newStrinArr = filterAlphaNumeric(s)
        if(newStrinArr.length == 2){
            return newStrinArr[0] === newStrinArr[1]
         }
    else return newStrinArr.join('') === newStrinArr.reverse().join('')
        
    
}
function filterAlphaNumeric(s){
        let alphaNumStr = []
        if(s.length <= 1){
        return true
        }
       
        for(e in s){
        code = s.charCodeAt(e);
        if((code > 47 && code < 58) || (code > 64 && code < 91) ||(code > 96 && code < 123)) { 
            alphaNumStr.push(s[e].toLowerCase())
            }
        }
    return alphaNumStr
}
