/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
const convert = function(s, numRows) {
    let space1 = (numRows - 1) * 2;
    let space2 = space1;
    let space3 = 0;
    let result = '';
    
    if(numRows === 1) return s;
    
    // 첫번째 행
    for(let i=0; i<s.length; i+=space1) {
        result += s[i];
    }
    
    // 중간 행
    for(let j=1; j<numRows-1; j++) {
        space2 -= 2;
        space3 += 2;
        toggle = true;
        for(let i=j; i<s.length;) {
            result += s[i];
            if(toggle) i += space2;
            else i += space3
            toggle = !toggle;
        }
    }
    
    // 마지막 행
    for(let i=numRows-1; i<s.length; i+=space1) {
        result += s[i];
    }
    
    return result;
};