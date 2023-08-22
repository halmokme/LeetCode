function binaryGap(n: number): number {
    const str = n.toString(2);
    const bits = str.split('');
    
    let maxDist = 0;
    let countBeginIndex = 0;
    bits.forEach((bit, index) => {
        if (bit !== '1') {
            return;
        }
        
        maxDist = Math.max(index - countBeginIndex, maxDist);
        countBeginIndex = index;
    });
    
    return maxDist;
};