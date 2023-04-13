function repeatedSubstringPattern(s: string): boolean {
    
    /*
    1. s를 붙여 새로운 문자열을 만든다.
    2. 양쪽 끝의 문자 하나씩을 제외한 문자열에서 s가 나왔다면 s는 substring pattern이다.
    */

    let str = (s + s).substring(1, s.length * 2 - 1);
    return str.indexOf(s) !== -1;
};