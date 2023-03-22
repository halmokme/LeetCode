/**
 * @param {number} n
 * @return {boolean}
 */
const canWinNim = function(n) {
    // 1~3개의 돌을 없앨 수 있다 -> 돌이 4개가 떨어질 때 그 다음 차례의 사람이 무조건 진다
    return n % 4 === 0 ? false : true;
};