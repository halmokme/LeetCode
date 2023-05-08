function calPoints(operations: string[]): number {
    
    let oper = [];

    for(let i=0; i<operations.length; i++) {
        if(operations[i] === 'C') oper.pop();
        else if(operations[i] === 'D') oper.push(oper[oper.length-1] * 2);
        else if(operations[i] == '+') oper.push(oper[oper.length-1] + oper[oper.length-2]);
        else oper.push(+operations[i]);
    }

    return oper.reduce((acc, val) => acc + val, 0);
};