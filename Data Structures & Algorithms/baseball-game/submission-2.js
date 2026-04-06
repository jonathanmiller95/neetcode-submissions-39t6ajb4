class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        let stack = [];

        for(let i = 0; i < operations.length; i++){
            if(operations[i] === '+'){
                let one = stack[stack.length-1];
                let two = stack[stack.length-2];
                stack.push(one+two);
            }
            else if(operations[i] === 'D'){
                let one = stack[stack.length-1];
                stack.push(one*2);
            }
            else if(operations[i] === 'C'){
                stack.pop();
            }
            else{
                stack.push(Number(operations[i]))
            }
        }

        if(stack.length === 0){
            return 0;
        }
        return stack.reduce((prev, curr) => {
            return prev+curr;
        });
    }
}
