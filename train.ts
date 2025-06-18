function singleNumber(nums: number[]): number {
	return nums.find((num) => nums.indexOf(num) === nums.lastIndexOf(num))!;
}


const res = singleNumber([1,2,3,4,2,1,3])
console.log(res);
