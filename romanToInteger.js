/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    
    const obj = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000        
    }
    
    const ArrHolder = []
    let sum = 0
    
    const Arr = s.split('')
    
    let i = 0
    for (i = 0; i < Arr.length; i++) {
        
        // console.log('i is ' + i)
        // console.log('1', i, Arr.length)
        // console.log('2', Arr[i], Arr[i+1])

        if (Arr[i] === 'I' && (Arr[i+1] === 'V' || Arr[i+1] === 'X')){
            ArrHolder.push(Arr[i] + Arr[i+1])
            Arr.splice(i, 2)
            i = -1
        }

        if (Arr[i] === 'X' && (Arr[i+1] === 'L' || Arr[i+1] === 'C')){
            ArrHolder.push(Arr[i] + Arr[i+1])
            Arr.splice(i, 2)
            i = -1
        }

        if (Arr[i] === 'C' && (Arr[i+1] === 'D' || Arr[i+1] === 'M')){
            ArrHolder.push(Arr[i] + Arr[i+1])
            Arr.splice(i, 2)
            i = -1
        }

    }
    
    if (ArrHolder.length > 0){
        
        for (let i = 0; i < ArrHolder.length; i++) {
            
            if (ArrHolder[i] === 'IV') {
                sum = sum + 4
            }
            if (ArrHolder[i] === 'IX') {
                sum = sum + 9
            }
            if (ArrHolder[i] === 'XL') {
                sum = sum + 40
            }
            if (ArrHolder[i] === 'XC') {
                sum = sum + 90
            }
            if (ArrHolder[i] === 'CM') {
                sum = sum + 900
            }
            if (ArrHolder[i] === 'CD') {
                sum = sum + 400
            }
            
        }
        
    }  
    
    Arr.forEach(x => { sum = sum + obj[x]})
    return sum
    
};
