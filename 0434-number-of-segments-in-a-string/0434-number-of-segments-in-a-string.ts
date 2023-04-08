function countSegments(s: string): number {
    let arr = s.split(' ');
    let res = 0;
    for(let i=0; i<arr.length; i++) {
        if(!arr[i]) continue;
        res++;
    }
    return res;
};