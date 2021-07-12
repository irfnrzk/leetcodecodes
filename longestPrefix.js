/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    
    // sort the array by string length
    let Arr = []
    
    Arr = strs.map(x => {
        
        return {
            word: x.split(''),
            strLength: x.split('').length
        }
        
    })
    
    Arr.sort((a, b) => b.strLength - a.strLength)
    
    let matchingChar = []
    
    // check first char of word in 1st array against the rest
    // if equal, push
    
    // check first and second char of word in 1st array against the rest
    // if equal, push 2nd char 
    // else loop
    
    for (let i = 0; i < Arr[0].strLength; i++) {      
                    
        let charHolder = {}
        
        if (Arr.length === 1) {

            matchingChar.push(Arr[0].word[i])
            
        } else {
            
            for (let j = 1; j < Arr.length; j++) {            
                
                if (Arr[0].word[i] === Arr[j].word[i]) {  

                    if (charHolder[Arr[0].word[i]]) {

                        charHolder[Arr[0].word[i]].occurance = charHolder[Arr[0].word[i]].occurance + 1

                    } else {

                        charHolder[Arr[0].word[i]] = {
                            letter: Arr[0].word[i],
                            occurance: 1
                        }

                    }

                } else {
                    
                    if (charHolder[Arr[0].word[i]]) {
                        
                    } else {

                        charHolder[Arr[0].word[i]] = {
                            letter: 'gap',
                            occurance: 1
                        }
                                            
                    }
                    
                }
            
            }

            if (charHolder[Arr[0].word[i]]){
                
                if (
                    charHolder[Arr[0].word[i]].occurance === Arr.length - 1
                    || charHolder[Arr[0].word[i]].letter === 'gap'
                ){
                    
                    matchingChar.push(charHolder[Arr[0].word[i]].letter)
                    
                }  
                
            } 
            
        }         
        
    }
    
    const indexOfNull = matchingChar.findIndex(x => x === 'gap')
    
    if (indexOfNull !== -1) {
        
        matchingChar.splice(indexOfNull)
        
    }
    
    return matchingChar.join('')    

};
