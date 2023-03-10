/**
 * @param {string} s
 * @return {number}
 */
const longestValidParentheses = function(s) {
    const stack = [-1];
    let len = 0;
    let max = 0;
    
    for(let i=0; i<s.length; i++) {
        if(s[i] === '(') {
            stack.push(i);
        } else {
            stack.pop();
            if(stack.length) {
                len = i - stack[stack.length-1];
                max = Math.max(len, max);
            } else {
                stack.push(i);
            }
        }
    }
    return max;
};