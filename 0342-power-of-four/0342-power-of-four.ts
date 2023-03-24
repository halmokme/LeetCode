function isPowerOfFour(n: number): boolean {
    if(n === 0) return false;
    while(n % 4 === 0) {
        n /= 4;
    }
    return n === 1;
    // return Number.isInteger(Math.log2(n) / 2);
};