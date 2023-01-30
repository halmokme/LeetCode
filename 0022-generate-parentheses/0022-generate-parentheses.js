/**
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = function(n) {
    const result = [];
    
    const recursive = (el, n, num) => {
        if(num > n || num < 0) return;
        if(el.length === n * 2) {
            if(num === 0) result.push(el);
            return;
        }
        recursive(el + '(', n, num + 1);
        recursive(el + ')', n, num - 1);
    }
    
    recursive('', n, 0)
    
    return result;
};

    
    