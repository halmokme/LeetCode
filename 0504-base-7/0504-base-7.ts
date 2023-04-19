function convertToBase7(num: number): string {
    if (num === 0) return '0';
    
    let res = '';
    let sign = num >= 0;
    num = Math.abs(num);
    
    while (num > 0) {
        res = num % 7 + res;
        num = num / 7 | 0;
    }
    
    return sign ? res : '-' + res;
};