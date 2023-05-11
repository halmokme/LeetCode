function findShortestSubArray(nums: number[]): number {

    let map ={}, max=0;
    for(let i =0; i<nums.length;i++){
        map[nums[i]] = map[nums[i]]+1 || 1;
        max = Math.max(map[nums[i]], max);
    }

    let result = Infinity;
    for(let i in map){
        if(map[i] === max && nums.indexOf(+i) !==-1 && nums.lastIndexOf(+i) !== -1){
            result = Math.min(nums.lastIndexOf(+i)-nums.indexOf(+i)+1, result);
        }
        if(result === max) break;
    }

    return result;
};