class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length != t.length) 
            return false;
        
        let left = Array.from(s);
        let right =Array.from(t);

        left.sort();
        right.sort();

        for(let i = 0; i < s.length; i++)
        {
            if(left[i] != right[i])
            return false;
        }
        return true;
    }

}
