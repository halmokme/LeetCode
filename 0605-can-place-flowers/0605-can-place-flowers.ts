function canPlaceFlowers(flowerbed: number[], n: number): boolean {

    if(n === 0) return true;

    let count = 0;
    for(let i=0; i<flowerbed.length; i++) {
        if(flowerbed[i-1] !== 1 && flowerbed[i] === 0 && flowerbed[i+1] !== 1) {
            flowerbed[i] = 1;
            count++;
            if(count === n) break;
        }
    }
    return count === n;
}