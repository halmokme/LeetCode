/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = function(s) {
    return s.trim().length - (s.trim().lastIndexOf(' ') + 1);
    // return s.split(' ').filter(el => el+'').at(-1).length;
};