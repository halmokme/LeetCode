function distributeCandies(candyType: number[]): number {
    let typeCount = [... new Set(candyType)].length;
    let candyHalf = Math.floor(candyType.length / 2);
    return Math.min(typeCount, candyHalf);
};