class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = new Map();
        
        // Convert to arrays
        for(let i = 0; i < strs.length; i++)
        {
            // Sort for key
            let sortedVal = Array.from(strs[i]).sort().join('');

            // Get map of if possible
            let originalVal = map.get(sortedVal);

            if(originalVal === undefined){
                map.set(sortedVal, [strs[i]]);
            }
            else
            {
                let updatedVal = [...originalVal, strs[i]];
                map.set(sortedVal, updatedVal);
            }
        }

        return Array.from(map.values());

    }
}
