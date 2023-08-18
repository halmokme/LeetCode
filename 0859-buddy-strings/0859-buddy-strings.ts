function buddyStrings(s: string, goal: string): boolean {
    if(s.length !== goal.length || s.length <= 1) return false
    if(s === goal) return new Set(s).size < s.length

    let buddy = []
    for (let i = 0; i < s.length; i++) {
        if(s[i] !== goal[i]) buddy.push(i)
    }

    if(buddy.length !== 2) return false
    if(s[buddy[0]] !== goal[buddy[1]] || s[buddy[1]] !== goal[buddy[0]]) return false

    return true
};