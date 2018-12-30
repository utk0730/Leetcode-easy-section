var removeDuplicates = function(nums) {
    if(nums.length==1) return nums.length
    else{
         let j=0
         for(let i=0;i<nums.length;i++){
            while(nums[i]==nums[i+1]){
                i++
            }
            nums[j]=nums[i]
            j++
         }
         return nums.slice(0,j).length
    }
}
