function backspaceCompare(s: string, t: string): boolean {
    const stack1 = [], stack2 = [];
    
    for (let char of s) {
        (char === '#') ? stack1.pop() : stack1.push(char);
    }
    for (let char of t) {
        (char === '#') ? stack2.pop() : stack2.push(char);
    }
    
    return stack1.join('') === stack2.join('');
};