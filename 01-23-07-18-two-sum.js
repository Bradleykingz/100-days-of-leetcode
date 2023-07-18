/*
* Given an array of integers "nums" and an integer "target", return indices of the two numbers such that they add up to target.
* You may assume that each input would have exactly one solution, and you may not use the same element twice.
* You can return the answer in any order.*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
let twoSum = function(nums, target) {

    for (let i = 0; i < nums.length; i++){
        let sum;

        for (let j = i+1; j < nums.length; j++){
            console.log("Adding: ", nums[i], nums[j])
            sum = nums[i] + nums[j]
            if (sum == target) return [i, j]
        }
    }
};

const nums = [3,9,3]
const target = 6

console.log(twoSum(nums, target))
