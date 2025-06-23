function countNumber(nums: number[]): number {
    return nums.filter(num => nums.indexOf(num) === nums.lastIndexOf(num)).length;
  }
  
console.log(countNumber([1, 2, 3, 2,4,6])); 