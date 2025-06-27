function moveZero(nums: number[]): number[] {
  const result = nums.filter(n => n !== 0); 
  const zeroCount = nums.length - result.length; 
  return result.concat(Array(zeroCount).fill(0)); 
}


console.log(moveZero([0, 1, 0, 3, 12])); 