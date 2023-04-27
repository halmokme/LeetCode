function reverseWords(s: string): string {
    let arr = s.split(' ').map(el => el.split('').reverse().join(''));
    return arr.join(' ');
};