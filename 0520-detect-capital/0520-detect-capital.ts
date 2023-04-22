function detectCapitalUse(word: string): boolean {
    if(word === word.toUpperCase()) return true;
    if(word.slice(1) === word.slice(1).toLowerCase()) return true;
    return false;
};