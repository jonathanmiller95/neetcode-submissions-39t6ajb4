class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let retVal = new Map();

        for(let i = 0; i < nums.length; i++){
            let arrayNoCurrent = [...nums];
            arrayNoCurrent.splice(i, 1);
            let initialVal = 1;

            let total = arrayNoCurrent.reduce(
                (accumulator, currentValue) => {
                    return accumulator * currentValue;
                    }, initialVal);
            retVal.set(i, total);              
        } 
        return retVal.values().toArray();
    }
}
