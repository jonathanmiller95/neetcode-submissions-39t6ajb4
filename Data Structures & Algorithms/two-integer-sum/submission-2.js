class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        for(let i = 0; i < nums.length; i++){
            let remainder = target - nums[i];
            let valid = nums.indexOf(remainder, i + 1);
            if(valid != -1)
            {
                return [i,valid];
            }
        }
    }
}
