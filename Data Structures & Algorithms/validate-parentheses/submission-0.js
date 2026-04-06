class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
isValid(s) {
    if (s.length < 1) return true;

    const stack = [];  // start empty, not pre-sized
    const opening = new Set(['{', '[', '(']);
    const pairs = { '}': '{', ']': '[', ')': '(' };

    for (const x of s) {  // for...of so we can return early
        if (opening.has(x)) {
            stack.push(x);
        } else {
            const top = stack.pop();
            if (top !== pairs[x]) return false;  // mismatch or empty stack
        }
    }

    return stack.length === 0;  // unmatched openers would leave stack non-empty
}}
