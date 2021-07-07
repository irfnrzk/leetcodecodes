/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    
    let obj = {}
    
    for (num in nums) {
        
        if (obj[target - nums[num]]) {
                      
            return [obj[target - nums[num]], num]
            
        } else {
            obj[nums[num]] = num
        }
        
    }
    
};
