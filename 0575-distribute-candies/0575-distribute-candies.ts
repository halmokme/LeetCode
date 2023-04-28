function distributeCandies(candyType: number[]): number {
    let typeCount = [... new Set(candyType)].length;
    return Math.min(typeCount, candyType.length / 2);
};