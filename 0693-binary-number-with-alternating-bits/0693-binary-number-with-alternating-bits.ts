function hasAlternatingBits(n: number): boolean {
    let binary = n.toString(2);

    for(let i=1; i<binary.length; i++) {
        if(binary[i] !== binary[i-1]) continue;
        else return false;
    }
    
    return true;
};