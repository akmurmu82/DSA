/**
 * Function to find the longest subarray with sum less than or equal to target.
 * Uses the two-pointer technique.
 * @param {number[]} nums - A sorted array of integers.
 * @param {number} len - The length of the array.
 * @param {number} target - The target sum.
 * @returns {number} - The length of the longest subarray found.
 */

function longestSubarray(arr, len, target) {
  // console.log(arr, len, target)
  let l = 0,
    r = 0,
    maxLen = 0,
    sum = 0;

  while (r < len) {
    sum += arr[r];
    while (sum > target && l <= r) {
      sum -= arr[l];
      l++;
    }
    if (sum <= target) {
      maxLen = Math.max(maxLen, r - l + 1);
    }
    r++;
  }
  console.log(maxLen);
}

longestSubarray();
