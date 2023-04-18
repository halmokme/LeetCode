function findWords(words: string[]): string[] {
    const res = [], 
          keyboard = { 1: 'qwertyuiop', 2: 'asdfghjkl', 3: 'zxcvbnm' };
    let i = 0,
        rowIdx = 1;
    
    while(i < words.length) {
        if(words[i].toLowerCase().split('').every((char) => keyboard[rowIdx].includes(char))) {
          res.push(words[i]);
            i++;
            rowIdx = 1;
        } else {
            if(rowIdx === 3) {
                i++;
                rowIdx = 1;
            }
            else {
                rowIdx++;    
            }
        }
    }
    
    return res;
};