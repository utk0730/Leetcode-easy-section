/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {      //IV,IX,XL,XC,CD,CM
    let i=0,n=0;
    while(i<s.length){
        switch(s[i]){
           case 'I':if(s[i+1] =='V'){n+=4;i++} 
                    else if(s[i+1] =='X'){n+=9;i++} 
                    else n+=1
                    break;
            case 'V':n+=5 
                     break;
            case 'X': if(s[i+1] =='L'){n+=40;i++} 
                      else if(s[i+1] =='C'){n+=90;i++}
                    else n+=10
                    break;
            case 'L': n+=50
                    break;
            case 'C':if(s[i+1] =='D'){n+=400;i++}
                    else if(s[i+1] =='M'){n+=900;i++}  
                    else n+=100
                    break;
            case 'D':n+=500 
                    break;
            case 'M':n+=1000 
                    break; 
        }
        i++
            
    }
    return n
};
