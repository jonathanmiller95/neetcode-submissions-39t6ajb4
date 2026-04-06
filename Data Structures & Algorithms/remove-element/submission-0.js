class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        let k = 0;
        nums.forEach((x, i) => {
            if(x != val){
                nums[k] = x;
                k++;
            }
        });

        return k;
    }
}
