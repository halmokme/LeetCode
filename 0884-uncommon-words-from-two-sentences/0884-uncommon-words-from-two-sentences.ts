function uncommonFromSentences(s1: string, s2: string): string[] {
    const words = [...s1.split(' '), ...s2.split(' ')];
    let arr = [];
    words.filter((word, idx) => {
        if(words.indexOf(word, idx+1) > -1) arr.push(word)
    })

    return words.filter(word => arr.indexOf(word) === -1);
};