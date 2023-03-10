/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
const convert = function(s, numRows) {
  let result = ""
  let space = (numRows - 1) * 2
  let diff1 = space, diff2 = 0
  
  if (numRows === 1) return s;
  for (let i = 0; i < numRows; i++) {
    let currStrIdx = i
    let useFirst = true
	while (currStrIdx < s.length) {
	  useFirst = diff2 === 0 ? true : diff1 === 0 ? false : useFirst
      result += s[currStrIdx]
      useFirst ? currStrIdx += diff1 : currStrIdx += diff2
      useFirst = !useFirst
    }
    diff1 -= 2
    diff2 += 2
  }
  
  return result
}