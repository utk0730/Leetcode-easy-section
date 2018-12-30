var isValid = function(s) {
  if(s.length % 2 !=0) return false
  let arr =[]
   for(let i=0;i<s.length;i++){
       switch(s[i]){
           case '(':
           case '{':
           case '[' : arr.push(s[i]); break;
           case ')' : if(arr.length==0 || arr.pop()!= '(') return false;break;
           case '}' : if(arr.length==0 || arr.pop()!= '{') return false;break;
           case ']' : if(arr.length==0 || arr.pop()!= '[') return false;break
       }
   }
   if(arr.length == 0) return true
    return false
    
};
