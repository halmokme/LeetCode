function isPowerOfThree(n: number): boolean {

    // while loop
    if(n === 0) return false;
    while(n % 3 === 0) {
        n /= 3;
    }
    return n === 1;
    
    // const expo = (Math.log(n) / Math.log(3)).toFixed(10);
    // return +expo % 1 === 0 ? true : false;
};