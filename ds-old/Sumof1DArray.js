const array = [1, 2, 3, 4];
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
const runningSum = (nums) => {
  let total = 0;
  let myArray = [];
  for (let i = 0; i < nums.length; i++) {
    total = total + nums[i];
    myArray.push(total);
  }
  return (myArray);
};
runningSum(array);
