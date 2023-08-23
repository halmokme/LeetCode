function projectionArea(grid: number[][]): number {
    let bottom = grid.length * grid[0].length;
    let columnMax = new Array(grid[0].length).fill(0);
    let rowMax = new Array(grid.length).fill(0);
    
    for(let i=0; i<grid.length; i++){
        for(let j=0; j<grid[0].length; j++){
            if(grid[i][j]===0) bottom--;
            rowMax[i] = Math.max(rowMax[i], grid[i][j]);
            columnMax[j] = Math.max(columnMax[j], grid[i][j]);
        }
    }
    
    let total = 0;
    total += rowMax.reduce((sum, ele)=>sum+=ele,0);
    total += columnMax.reduce((sum, ele)=>sum+=ele, 0);
    total += bottom;
    return total;
};