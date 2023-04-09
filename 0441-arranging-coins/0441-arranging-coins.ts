function arrangeCoins(n: number): number {
    let row = 1;
    while (n >= 0) {
        n -= row;
        row++;
    } 
    return row - 2;
};