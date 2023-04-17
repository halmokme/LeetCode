function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
    let res=[];
    for(let i=0 ; i<nums1.length; i++){
        let found = false;
        let val = 0;
        for(let j=0; j<nums2.length; j++){
            if(!found){
                if(nums1[i] === nums2[j]){
                    found = true;
                    val = -1
                }
                continue;
            }
            if(nums2[j] > nums1[i]){
                val = nums2[j]
                break;
            }
        }
        res.push(val)
    }
    return res;
};