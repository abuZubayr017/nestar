function reverseInt(num: number): number {
	let numStr = num.toString();
	let revNum = numStr.split('').reverse().join('');
	let result = parseInt(revNum);

	return result;
}

let a = reverseInt(1234567);
console.log('result:', a);
