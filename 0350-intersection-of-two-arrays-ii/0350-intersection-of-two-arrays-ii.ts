function intersect(nums1: number[], nums2: number[]): number[] {
    let res =[]
    if(nums1.length > nums2.length) {
        for(let i=0; i<nums1.length; i++) {
            let idx = nums2.indexOf(nums1[i]);
            if(idx > -1) {
                res.push(nums1[i]);
                nums2[idx] = -1;
            }
        }
    } else {
        for(let i=0; i<nums2.length; i++) {
            let idx = nums1.indexOf(nums2[i]);
            if(idx > -1) {
                res.push(nums2[i]);
                nums1[idx] = -1;
            }
        }
    }
    return res;
};