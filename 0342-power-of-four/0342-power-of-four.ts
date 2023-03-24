function isPowerOfFour(n: number): boolean {
    // if(n === 0) return false;
    // while(n % 4 === 0) {
    //     n /= 4;
    // }
    // return n === 1;
    const expo = (Math.log(n) / Math.log(4)).toFixed(10);
    return +expo % 1 === 0 ? true : false;
};