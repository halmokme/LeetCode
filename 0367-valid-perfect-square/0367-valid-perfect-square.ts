function isPerfectSquare(num: number): boolean {

    if(num === 1) return true;

    let n = Math.ceil(num / 2);

    for(let i=1; i<=n; i++) {
        if(i * i === num) return true;
        if(i * i > num) return false;
    }
};