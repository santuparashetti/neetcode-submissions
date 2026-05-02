class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        // for(let i = 0; i < nums.length-1; i++) {
        //     for(let j = i+1; j < nums.length; j++) {
        //         if (nums[i] == nums[j]) {
        //             return true;
        //         }
        //     }
        // }
        // return false;
        const seen = new Set();
        for (let n of nums) {
            if (seen.has(n)) {
                return true;
            }
            seen.add(n)
        }
        return false;
    }
}
