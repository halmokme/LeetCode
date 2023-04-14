function findComplement(num: number): number {
    let binarr = num.toString(2).split('');
    
    let reverse = binarr.map(el => {
        if(el === '1') return 0;
        else if(el === '0') return 1;
        else return el;
    }).join('');
    
    return parseInt(reverse, 2);
};