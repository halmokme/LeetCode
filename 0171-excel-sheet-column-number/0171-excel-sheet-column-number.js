/**
 * @param {string} columnTitle
 * @return {number}
 */
const titleToNumber = function(columnTitle) {
    const str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let res = 0;
    for(let i=0; i<columnTitle.length; i++) {
        res += (str.indexOf(columnTitle[i])+1) * (26 ** (columnTitle.length-i-1));
    }
    return res;
};