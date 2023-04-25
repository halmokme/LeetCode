function reverseStr(s: string, k: number): string {
    for(let i = 0; i < s.length; i+= k*2) {
      let str = s.slice(i, i + k);
      s = s.replace(str, str.split('').reverse().join(''))
    }
    return s;
};