/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    
    let value = x
    // console.log(typeof value)
    let positiveValue = Math.sqrt(x*x)
    
    let minConstraint = Math.pow(-2, 31)    
    let maxConstraint = Math.pow(2, 31) - 1
    
    let Arr = positiveValue
        .toString()
        .split('')
        .reverse()
    
    if (value < 0) {        
        Arr.unshift('-')                    
    }
    
    const output = Arr.join('')  
    
    return Number(output) <= minConstraint || Number(output) >= maxConstraint ? 0 : Number(output)
    
};
