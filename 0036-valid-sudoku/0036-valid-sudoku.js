/**
 * @param {character[][]} board
 * @return {boolean}
 */
const isValidSudoku = function(board) { 
    const col = boardCol(board);
    const matrix = boardMatrix(board);
    for(let i=0; i<board.length; i++) {
      if(!isValidNum(board[i])) return false;
    }
    for(let i=0; i<col.length; i++) {
        if(!isValidNum(col[i])) return false;
    }
    for(let i=0; i<matrix.length; i++) {
        if(!isValidNum(matrix[i])) return false;
    }
    return true;
};

const isValidNum = (arr) => {
    const nums = arr.filter(el => el !== '.');
    const set = new Set(nums);
    return set.size === nums.length;
}

const boardCol = (arr) => {
    return arr[0].map((el, i) => {
        return arr.map(el2 => el2[i]);
    })
}

const boardMatrix = (arr) => {
    const sq = [[], [], [], [], [], [], [], [], []];
    arr.forEach((el, i) => {
        el.forEach((el2, i2) => {
            const sqIdx = (Math.floor(i / 3) * 3) + (Math.floor(i2 / 3));
            sq[sqIdx].push(el2);
        })
    })
    return sq;
}


