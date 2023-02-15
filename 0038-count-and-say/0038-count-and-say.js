/**
 * @param {number} n
 * @return {string}
 */
const  countAndSay = function(n) {
  let start = '1';
  let result = '';
  let count = 1;
  for (i=0; i<n-1; i++){
    for (let j=0; j<start.length; j++){
      if(start[j] !== start[j+1] || j == start.length - 1){
        result += count + start[j];
        count = 1;
      } else count +=1;
    }
    start = result;
    result = '';
  }
  return start;
};