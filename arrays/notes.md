
# Two Pointer Technique

This repository contains my solutions to various problems using the two-pointer technique. The two-pointer technique is a powerful algorithmic approach for solving problems that involve arrays or linked lists. By using two pointers to traverse the data structure, we can often reduce the time complexity of certain problems.

## Repository Structure

- **two_pointer/**
  - `two_sum.js`: Find two numbers in a sorted array that add up to a given target.
  - `remove_duplicates.js`: Remove duplicates from a sorted array in place.
  - `merge_sorted_arrays.js`: Merge two sorted arrays.
  - `reverse_vowels.js`: Reverse only the vowels in a string.
  - `container_with_most_water.js`: Find the container that holds the most water.
  - ...

## Two Sum (`two_sum.js`)
Function to find two numbers in a sorted array that add up to a given target using the two-pointer technique.
```javascript
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

        if (sum === target) {
            return [left, right];
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }

    return [];  // return an empty array if no solution is found
}

// Example usage:
const nums = [2, 3, 4, 6, 8, 10];
const target = 14;
console.log(twoSum(nums, target));  // Output: [3, 5]
```

## Remove Duplicates (`remove_duplicates.js`)
Function to remove duplicates in place from a sorted array and return the new length.
```javascript
/**
 * Function to remove duplicates from a sorted array in place.
 * Uses the two-pointer technique.
 * @param {number[]} nums - A sorted array of integers.
 * @returns {number} - The new length of the array without duplicates.
 */
function removeDuplicates(nums) {
    if (nums.length === 0) return 0;

    let j = 0;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[j]) {
            j++;
            nums[j] = nums[i];
        }
    }

    return j + 1;
}

// Example usage:
const nums = [1, 1, 2, 2, 3, 3, 4];
console.log(removeDuplicates(nums));  // Output: 4
console.log(nums.slice(0, 4));        // Output: [1, 2, 3, 4]
```

## Merge Sorted Arrays (`merge_sorted_arrays.js`)
Function to merge two sorted arrays into one sorted array.
```javascript
/**
 * Function to merge two sorted arrays into one sorted array.
 * Uses the two-pointer technique.
 * @param {number[]} arr1 - The first sorted array.
 * @param {number[]} arr2 - The second sorted array.
 * @returns {number[]} - The merged sorted array.
 */
function mergeSortedArrays(arr1, arr2) {
    let mergedArray = [];
    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            mergedArray.push(arr1[i]);
            i++;
        } else {
            mergedArray.push(arr2[j]);
            j++;
        }
    }

    // Add remaining elements
    while (i < arr1.length) {
        mergedArray.push(arr1[i]);
        i++;
    }

    while (j < arr2.length) {
        mergedArray.push(arr2[j]);
        j++;
    }

    return mergedArray;
}

// Example usage:
const arr1 = [1, 3, 5];
const arr2 = [2, 4, 6];
console.log(mergeSortedArrays(arr1, arr2));  // Output: [1, 2, 3, 4, 5, 6]
```

## Reverse Vowels (`reverse_vowels.js`)
Function to reverse only the vowels in a string.
```javascript
/**
 * Function to reverse only the vowels in a string.
 * Uses the two-pointer technique.
 * @param {string} s - The input string.
 * @returns {string} - The string with reversed vowels.
 */
function reverseVowels(s) {
    const vowels = 'aeiouAEIOU';
    let arr = s.split('');
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        while (left < right && !vowels.includes(arr[left])) {
            left++;
        }
        while (left < right && !vowels.includes(arr[right])) {
            right--;
        }
        if (left < right) {
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left++;
            right--;
        }
    }

    return arr.join('');
}

// Example usage:
const str = "hello";
console.log(reverseVowels(str));  // Output: "holle"
```

## Container With Most Water (`container_with_most_water.js`)
Function to find the container that holds the most water.
```javascript
/**
 * Function to find the container that holds the most water.
 * Uses the two-pointer technique.
 * @param {number[]} height - Array representing the heights of the container walls.
 * @returns {number} - The maximum amount of water the container can hold.
 */
function maxArea(height) {
    let maxArea = 0;
    let left = 0;
    let right = height.length - 1;

    while (left < right) {
        const currentArea = Math.min(height[left], height[right]) * (right - left);
        maxArea = Math.max(maxArea, currentArea);

        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxArea;
}

// Example usage:
const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
console.log(maxArea(height));  // Output: 49
```

## Contributing
Feel free to contribute by adding new problems and solutions using the two-pointer technique or by improving the existing ones. Fork the repository, make your changes, and submit a pull request.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

This `README.md` file provides a structured overview of the two-pointer technique with examples and explanations for each problem. It should help you and others navigate the repository easily.
