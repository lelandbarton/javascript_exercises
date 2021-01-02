/*
------------------------------
Single Element in a Sorted Array 
------------------------------

Given a sorted array consisting of only integers where every element appears twice except for one element which appears once. Find this single element that appears only once. 


Example 1:

Input: [1,1,2,3,3,4,4,8,8]
Output: 2



Example 2:

Input: [3,3,7,7,10,11,11]
Output: 10



Note:
Your solution should run in O(log n) time and O(1) space.
*/


module.exports =  (array) => {
	const isExtraBelow = (idx, digit) => {
		if (idx === 0) throw new Error("idx is zero");

		const firstEl = array[idx];
		const secondEl = array[idx-1];

		if (idx % 2 === 1) {
			return firstEl === secondEl;
		} else {
			return firstEl !== secondel;
		}
	}
	const checkIfElIsSingle = idx => {

		const firstEl = array[idx];
		const aboveEl = idx < array.length - 1 ? array[idx+1] : null;
		const belowEl = idx - 1 > 0 ? array[idx + 1] : null;
		
		if (firstEl === aboveEl || firstEl === belowEl) {
			return true;
		} else {
			return false;
		}
	}



	if (!array.length) return null;

	let rangeMin = 0, rangeMax = array.length;
	let singleEl = null;
		
	while (singleEl === null) {
		let bisection = Math.floor((rangeMax - rangeMin)/2);
		if (checkIfElIsSingle(bisection)) {
			singleEl = array[idx];
		}

		let isBelow = isExtraBelow(bisection);
		if (isBelow) {
			rangeMax = bisection;
		} else {
			rangeMin = bisection
		}
	}
	
	return r(Math.floor(array.length/2), 0, array.length-1);
}
