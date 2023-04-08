function countSegments(s: string): number {
    if(!/\S/g.test(s)) return 0;
    else return s.trim().split(/\s+/).length;
};