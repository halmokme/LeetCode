/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
const isMatch = function(s, p) {
    const a = [];
    for(let row=0; row<s.length+1; row++) {
        a[row] = [];
        for(let col=0; col<p.length+1; col++) {
            a[row][col] = false;
        }
    }
    a[0][0] = true;
    
    for(let col=1; col<a[0].length; col++) {
        if(p[col-1] === '*') a[0][col] = a[0][col-2];
    }
    
    for(let row=1; row<a.length; row++) {
        for(let col=1; col<a[0].length; col++) {
            let x = col - 1;
            let y = row - 1;
            
            if(p[x] === '.' || p[x] === s[y]) {
                a[row][col] = a[row - 1][col - 1];
            } else if (p[x] === '*') {
                a[row][col] = a[row][col - 2];
                if(p[x - 1] === '.' || p[x - 1] === s[y]) {
                    a[row][col] = a[row][col] || a[row - 1][col];
                }
            }
        }
    }
    return a[s.length][p.length];
};