
// O(n^2) | O(1)
function twoNumberSum(array, targetSum) {
  // Write your code here.
	let result = [];
	for (let i = 0; i < array.length; i++) {
		for (let j = i+1; j < array.length; j++) {
			if (array[i] + array[j] === targetSum) {
				result.push(array[i], array[j]);
			}
		}
	}
	return result;
}
// O(n) time | O(n) space
function twoNumberSum(array, targetSum) {
  // Write your code here.
	const previousNumbers = {};
	for (const n of array) {
		let y = targetSum - n
		if (previousNumbers[y] !== undefined) {
			return [n, y];
		} else {
			previousNumbers[n] = true;
		}
	}
	return [];
}

// O(nlog(n)) | O(1) space
function twoNumberSum(array, targetSum) {
  // Write your code here.
	array.sort((a,b) => a - b);
	let left = 0;
	let right = array.length - 1;
	while (left < right) {
		const currentSum = array[left] + array[right];
		if (currentSum === targetSum) {
			return [array[left], array[right]];
		} else if (currentSum < targetSum) {
			left ++;
		} else if (currentSum > targetSum) {
			right --;
		}
	}
	return [];
}
