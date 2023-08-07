function rotateString(s: string, goal: string): boolean {
    for (let i=0; i<s.length; i++) {
        if (goal.slice(i) + goal.slice(0, i) === s) return true;
    }
    return false;
};