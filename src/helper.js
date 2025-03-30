// helper.js
export function genNums(n) {
    return Array.from({ length: n }, () => Math.floor(Math.random() * 10));
  }
  
  export function sum(nums) {
    return nums.reduce((a, b) => a + b, 0);
  }
  