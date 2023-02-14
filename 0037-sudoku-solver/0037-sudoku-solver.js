/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
const solveSudoku = function(board) {
    let solve = (board) => {
        for(let i=0;i<board.length;i++) {
            for(let j=0;j<board[0].length;j++) {
                if(board[i][j] === '.') {
                    for(let c = 1; c<= 9; c++) {
                       if(isValid(board,i,j,String(c))) {
                            board[i][j] = String(c);    
                            if(solve(board))
                                return true;
                            else
                                board[i][j] = '.';
                        }    
                    }
                    return false;
                }
            }
        }
        return true;
    }
    solve(board);
    return board;
};
let isValid = (board,row,col,c) => {
    for(let i=0;i<board.length;i++) {
          if(board[row][i] === c) {
              return false;
          }
          if(board[i][col] === c) {
              return false;
          }
        
          let rowGrid = Math.floor(row/3);
          let colGrid = Math.floor(col/3);
        
          if(board[3 * rowGrid + Math.floor(i/3)][3 * colGrid + i%3] === c){
              return false;
          }
    }
  return true;
}