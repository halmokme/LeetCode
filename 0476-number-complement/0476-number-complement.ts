function findComplement(num: number): number {
    let binarr = num.toString(2).split('');
    let reverse = binarr.map(el => el === '1' ? 0 : el === '0' ? 1 : el).join('');
    return parseInt(reverse, 2);
};