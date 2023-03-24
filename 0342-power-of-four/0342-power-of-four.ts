function isPowerOfFour(n: number): boolean {
    while(n > 1) {
        if(n % 4 === 0) n /= 4;
        else return false;
    }
    return n === 1;
};