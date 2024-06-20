/**
 * Function to find two numbers in a sorted array that add up to a given target.
 * Uses the two-pointer technique.
 * @param {number[]} nums - A sorted array of integers.
 * @param {number} target - The target sum.
 * @returns {number[]} - The indices of the two numbers that add up to the target.
 */

function twoSum(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const sum = nums[left] + nums[right];
    if (sum == target) {
      return [left, right];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
  return -1;
}

const nums = [2, 3, 4, 6, 8, 10];
const target = 14;
console.log(twoSum(nums, target));
