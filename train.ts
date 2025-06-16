function findDuplicates(arr: number[]): number[] {
    const count: { [key: number]: number } = {};
    const result: number[] = [];

    for (const num of arr) {
        count[num] = (count[num] || 0) + 1;
    }

    for (const num in count) {
        if (count[num] >= 2) {
            result.push(Number(num));
        }
    }

    return result;
}

console.log(findDuplicates([1, 2, 2,3, 4, 5, 4, 3, 4])); 