function countSegments(s: string): number {
    return s.split(' ').filter(el => el).length;
};