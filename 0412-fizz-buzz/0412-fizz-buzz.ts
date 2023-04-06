const getVal = (i: number): string => {
    if(i % 3 === 0 && i % 5 === 0) return 'FizzBuzz';
    if(i % 3 === 0) return 'Fizz';
    if(i % 5 === 0) return 'Buzz';
    return i.toString();
}

function fizzBuzz(n: number): string[] {
    let res = [];
    for(let i=1; i<=n; i++) {
        res.push(getVal(i));
    }
    return res;
};

