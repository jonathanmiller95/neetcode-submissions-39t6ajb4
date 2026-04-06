class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        for(let i = 0; i < nums.length; i++)
        {
            if(nums.filter(x => x === nums[i]).length > 1)
            {
                return true;
            }
        }

        return false;
    }
}
