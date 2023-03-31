/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */


function guessNumber(n: number): number {
    let start = 0, end = n, pick, mid;
    while(pick !== 0) {
        mid = Math.floor((start + end) / 2);
        pick = guess(mid);
        if(pick === -1) end = mid - 1;
        else if(pick === 1) start = mid + 1;
    }
    return mid;
};
