function uniqueMorseRepresentations(words: string[]): number {
    const morse = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];

    return new Set(words.map(word=> word.split('').map(char=> morse[char.charCodeAt(0)-97]).join(''))).size;
};