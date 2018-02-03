// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)
var isDinersClubPrefix = function (num) {
	// prefix is 38 or 39
	// length is 14
	var prefix = num.substr(0, 2);
	return prefix === '38' || prefix === '39';
};

var isAmericanExpressPrefix = function (num) {
	// prefix is 34 or 37
	// length is 15
	var prefix = num.substr(0, 2);
	return prefix === '34' || prefix === '37';
};

var isVisaLength = function (num) {
	// length is 13, 16, or 19
	var len = num.length;
	return len === 13 || len === 16 || len === 19;
};

var isVisaPrefix = function (num) {
	// prefix is 4
	return num[0] === '4';
};

var isMasterCardPrefix = function (num) {
	// prefix is 51, 52, 53, 54, or 55
	// length of 16
	var prefix = num.substr(0, 2);
	return prefix === '51' || prefix === '52' || prefix === '53' || prefix === '54' || prefix === '55';
};

var isDiscoverLength = function (num) {
	// length is 16 or 19
	var len = num.length;
	return len === 16 || len === 19;
};

var isDiscoverPrefix = function (num) {
	// prefix is 6011, 644-649, or 65
	var prefixIs65 = num.substr(0, 2) === '65';
	var prefixIs6011 = num.substr(0, 4) === '6011';

	// checking if prefix is 644-649
	// store first 3 numbers in a var
	var prefix = num.substr(0, 3);
	// loop over 644-649
	for (var start = 644; start <= 649; start++) {
		// check if start is equal to prefix
		if (start.toString() === prefix) {
			// if they are the same, return true
			return true;
		}
	}

	// return true if prefix is 65 or 6011
	return prefixIs65 || prefixIs6011;
};

var isMaestroLength = function (num) {
	// length is 12-19
	var len = num.length;
	return len >= 12 && len <= 19;
};

var isMaestroPrefix = function (num) {
	// prefix is 5018, 5020, 5038, or 6304
	var prefix = num.substr(0, 4);
	return prefix === '5018' || prefix === '5020' || prefix === '5038' || prefix === '6304';
};

var isChinaLength = function (num) {
	// length is 16-19
	var len = num.length;
	return len >= 16 && len <= 19;
};

var isChinaPrefix = function (num) {
	// prefix is 622126-622925, 624-626, or 6282-6288

	// checking 622126-622925	
	for (var i = 622126; i <= 622925; i++) {
		if (i.toString() === num.substr(0, 6)) {
			return true;
		}
	}

	// checking 624-626	
	for (var i = 624; i <= 626; i++) {
		if (i.toString() === num.substr(0, 3)) {
			return true;
		}
	}

	// checking 6282-6288
	for (var i = 6282; i <= 6288; i++) {
		if (i.toString() === num.substr(0, 4)) {
			return true;
		}
	}

	// prefix didn't match China UnionPay
	return false;
};

var isSwitchLength = function (num) {
	// length is 16, 18, or 19
	var len = num.length;
	return len === 16 || len === 18 || len === 19;
};

var isSwitchPrefix = function (num) {
	// prefix is 4903, 4905, 4911, 4936, 564182, 633110, 6333, or 6759
	var lengthSixPrefixes = ['564182', '633110'];
	var lengthFourPrefixes = ['4903', '4905', '4911', '4936', '6333', '6759'];

	if (lengthSixPrefixes.indexOf(num.substr(0, 6)) > -1) {
		return true;
	}

	if (lengthFourPrefixes.indexOf(num.substr(0, 4)) > -1) {
		return true;
	}

	// prefix didn't match Switch
	return false;
};

var detectNetwork = function(num) {
	// Note: `cardNumber` will always be a string
	if (num.length === 14 && isDinersClubPrefix(num)) {
		return 'Diner\'s Club';
	}
	if (num.length === 15 && isAmericanExpressPrefix(num)) {
  		return 'American Express';
  	}
  	if (isSwitchLength(num) && isSwitchPrefix(num)) {
  		return 'Switch';
  	}
  	if (isVisaLength(num) && isVisaPrefix(num)) {
  		return 'Visa';
  	}
  	if (num.length === 16 && isMasterCardPrefix(num)) {
  		return 'MasterCard';
  	}
  	if (isDiscoverLength(num) && isDiscoverPrefix(num)) {
  		return 'Discover';
  	}
  	if (isMaestroLength(num) && isMaestroPrefix(num)) {
  		return 'Maestro';
  	}
  	if (isChinaLength(num) && isChinaPrefix(num)) {
  		return 'China UnionPay';
  	}
  	// Once you've read this, go ahead and try to implement this function, then return to the console.
};


