var bigInt = require('big-integer');

module.exports = function multiply(first, second) {
	return bigInt(first).times(bigInt(second)).toString();
}
