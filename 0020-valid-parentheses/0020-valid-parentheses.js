/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function(s) {
    const brackets = {
        '(': ')',
        '[': ']',
        '{': '}',
    }
    const stack = [];

    for(let i=0; i<s.length; i++) {
        if(Object.keys(brackets).includes(s[i])) stack.push(s[i]);
        else {
            if(brackets[stack[stack.length-1]] === s[i]) stack.pop();
            else return false;
        }
    }
    return stack.length ? false : true;
};