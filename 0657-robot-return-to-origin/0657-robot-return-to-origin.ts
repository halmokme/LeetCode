function judgeCircle(moves: string): boolean {
    let left = 0, right = 0, up = 0, down = 0;
    
    for(let move of moves) {
        if(move === 'L') left++;
        else if(move === 'R') right++;
        else if(move === 'U') up++;
        else if(move === 'D') down++
    }
    return (left === right && up === down);
};