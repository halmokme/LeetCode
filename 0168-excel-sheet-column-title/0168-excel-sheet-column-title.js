/**
 * @param {number} columnNumber
 * @return {string}
 */


const convertToTitle = function(columnNumber) {
    /*
    A~Z : 1 ~ 26
    AA ~ AZ : 26*1+1 ~ 26*2
    BA ~ BZ : 26*2+1 ~ 26*3
    CA ~ CZ : 26*3+1 ~ 26*4
    ...
    ZA ~ ZZ : 26*26+1 ~ 26*27
    */
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let result = ''
    while(columnNumber > 0){
        let rest = columnNumber % 26
        let share = Math.floor(columnNumber / 26)
        if(rest === 0){
            rest = 26
            share --
        }
        result = alphabet[rest - 1]+result

        columnNumber = share
    }
    return result
};
