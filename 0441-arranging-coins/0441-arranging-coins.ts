function arrangeCoins(n: number): number {
    let row = 1;
    while (n >= row) {
        n -= row;
        row++;
    } 
    return row - 1;
};