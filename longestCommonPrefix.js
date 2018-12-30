function commonPrefixInTwoStrings(str1,str2){
    let count=0
    for(let i=0;i<str1.length;i++){
            if(str1[i]!=str2[i]) break
            else count++
    }
    return str1.slice(0,count)
}
var longestCommonPrefix = function(strs) {
    if(strs.length==0) return ''
    if(strs.length==1) return strs[0]
    let res=strs[0],i=1
    let first = commonPrefixInTwoStrings(res,strs[i])
    while(first!='' && i<strs.length-1){
       first = commonPrefixInTwoStrings(first,strs[i+1])
       i++
    }
    
    return first
};
