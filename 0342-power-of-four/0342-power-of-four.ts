function isPowerOfFour(n: number): boolean {
    // if(n === 0) return false;
    // while(n % 4 === 0) {
    //     n /= 4;
    // }
    // return n === 1;
    const expo = (Math.log2(n) / 2).toFixed(10);
    return +expo % 1 === 0 ? true : false;
};