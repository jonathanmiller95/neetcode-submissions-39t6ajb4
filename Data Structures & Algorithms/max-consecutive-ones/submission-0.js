class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        if(nums.length === 0)
            return 0;
        let cur = 0;
        let max = 0;
        nums.forEach(x => {
            if(x === 1){
                cur++;
            }
            else{
                cur = 0;
            }
            max = Math.max(max, cur);
        });
        return max;
    }
}
