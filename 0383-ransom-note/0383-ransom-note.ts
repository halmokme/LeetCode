function canConstruct(ransomNote: string, magazine: string): boolean {
    
    let arr = magazine.split('');
    
    for(let i=0; i<ransomNote.length; i++) {
        let idx = arr.indexOf(ransomNote[i]);
        if(idx === -1) return false;
        else arr.splice(idx, 1);
    }
    
    return true;
};