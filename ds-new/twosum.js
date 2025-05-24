// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

const findTwoSum = (nums, target) => {
    for(i = 0; i< nums.length; i++) {
      for(j = 0; j< nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j]
            }
        }  
    }
}
const findSumOfAllElements = (nums) => {
    let sum = 0;
    for (i =0; i< nums.length; i++) {
        sum += nums[i]
    }
    return sum;
}
console.log(findTwoSum([2,7,11,15], 9))
console.log(findSumOfAllElements([2,7,11,15]))