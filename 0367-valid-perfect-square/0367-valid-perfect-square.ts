function isPerfectSquare(num: number): boolean {
    
    /*
    1 = 1
    4 = 1, 4
    9 = 1, 4, 9
    16 = 1, 4, 9, 16
    25 = 1, 4, 9, 16, 25
    36 = 1, 4, 9, 16, 25, 36
    */
    let a = 1;

    while (num > 0) {
        num = num - a;
        a += 2;
    }
    return num === 0;
};