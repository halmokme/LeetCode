function findRelativeRanks(score: number[]): string[] {
    const arr = [...score].sort((a, b) => b - a);
    let res = [];
    score.map(el => {
        let idx = arr.indexOf(el);
        if(idx === 0) res.push('Gold Medal');
        else if(idx === 1) res.push('Silver Medal');
        else if(idx === 2) res.push('Bronze Medal');
        else res.push(idx+1+'');
    })
    return res;
};