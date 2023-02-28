/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = function(s) {
    // let str = s.trim();
    // return str.length - (str.lastIndexOf(' ') + 1);
    return s.split(' ').filter(el => el+'').at(-1).length;
};