var uniqueMorseRepresentations = function(words) {
    let morseArr = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."] 
    let morseObj = {}
    for(let i='z'.charCodeAt(0);i>='a'.charCodeAt(0);i--){
        morseObj[String.fromCharCode(i)] = morseArr.pop()
    }
    let mainArr=[];
    for(let i =0;i<words.length;i++){
        let strArr=[],j=0
        while(j<words[i].length){
            strArr.push(morseObj[words[i][j]])
            j++
        }
        mainArr.push(strArr.join(''))
    }
    return Array.from(new Set(mainArr)).length
};
