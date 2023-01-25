/**
 * @param {string} digits
 * @return {string[]}
 */

const letterCombinations = function(digits) {
    if(digits.length === 0) return [];
    const map = {
        2: ['a', 'b', 'c'],
        3: ['d', 'e', 'f'],
        4: ['g', 'h', 'i'],
        5: ['j', 'k', 'l'],
        6: ['m', 'n', 'o'],
        7: ['p', 'q', 'r', 's'],
        8: ['t', 'u', 'v'],
        9: ['w', 'x', 'y', 'z'],
    }
    const result = [];
    const permute = (el, idx) => {
        if(idx === digits.length) {
            result.push(el);
            return;
        }
        for(let i=0; i<map[digits[idx]].length; i++) {
            permute(el + map[digits[idx]][i], idx+1);
        }
    }
    permute('', 0);
    
    return result;
};