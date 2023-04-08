function countSegments(s: string): number {
    const segment = s.match(/[^ ]+/g);
    return segment ? segment.length : 0
};