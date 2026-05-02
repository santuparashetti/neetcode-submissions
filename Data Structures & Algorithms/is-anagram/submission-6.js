class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) {
            return false;
        }
       const map = new Map();
       for (let i of s) {
            map.set(i, (map.get(i) || 0) + 1);            
       }
       for (let i of  t) {
        if(map.get(i) == undefined) {
            return false;
        }
        map.set(i, map.get(i) - 1);
        if (map.get(i) == 0) {
            map.delete(i);
        }
       }
    return map.size == 0;
    }
}
