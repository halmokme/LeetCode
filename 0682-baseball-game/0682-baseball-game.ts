function calPoints(operations: string[]): number {
    
    let arr = operations.reduce((acc, val) => {
        if(val === 'C') acc.pop();
        else if(val === 'D') acc.push(acc[acc.length-1] * 2);
        else if(val === '+') acc.push(acc[acc.length-1] + acc[acc.length-2]);
        else acc.push(+val);
        return acc;
    }, [])
    
    return arr.reduce((acc, val) => acc + val, 0);
};