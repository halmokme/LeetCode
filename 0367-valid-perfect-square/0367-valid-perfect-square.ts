function isPerfectSquare(num: number): boolean {
    
    /*
    1 = 1
    4 = 1, 4
    9 = 1, 4, 9
    16 = 1, 4, 9, 16
    25 = 1, 4, 9, 16, 25
    36 = 1, 4, 9, 16, 25, 36
    */
    
    return num ** 0.5 % 1 === 0
};