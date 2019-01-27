
function parse(s) {
	const buildNode = (op,l,r) => {op,l,r};
	
	let state = 'START';
	let stack = [];
	let data = '';

	for(let i = 0; i < s.length; i++) {
		let char = s.charAt(i);
		if (/[0-9\\.]/.test(char)) {
			
		} else if (/[\+-/
	}
	
	return "";
}

module.exports = parse;
