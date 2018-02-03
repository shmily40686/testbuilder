/*
 * You'll eventually be given instructions how to use this file
 * If you want to use it before then, you'll have to figure it out yourself
 */

// You don't actually want to fill *this* value in on line 9, but you'll see
// other places in this file where you'll replace the FILL_ME_IN with a
// different value.
var FILL_ME_IN = 'Fill this value in';
 
// describe('Introduction to Mocha Tests - READ ME FIRST', function() {
//   // A Mocha test is just a function!
//   // If the function throws an error when run, it fails.
//   // If it doesn't throw an error when run, it doesn't fail. 
//   // To read more about mocha, visit mochajs.org

//   // Once you've read and understood this section, please comment it out. 
//   // You will not be able to proceed with a failing test. 

//   it('Throws an error so it fails', function() {
//     throw new Error('Delete me!');
//   });

//   it('Doesn\'t throw an error, so it doesn\'t fail', function() {
//     // This test doesn't really test anything at all! It will pass no matter what.
//     var even = function(num){
//       return num/2 === 0;
//     }
//     return even(10) === true;
//   });

//   // In tests, we want to compare the expected behavior to the actual behavior.
//   // A test should only fail if the expected behavior doesn't match the actual.
//   it('Throws an error when expected behavior does not match actual behavior', function() {
//     var even = function(num){
//       return num/2 === 0;
//     }

//     if(even(10) !== true) {
//       throw new Error('10 should be even!');
//     }
//   });
// });
var expect = chai.expect;

describe('Diner\'s Club', function() {
  // prefix is 38 or 39
  // length is 14

  it('has a prefix of 38 and a length of 14', function() {
    if (detectNetwork('38345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
  });

  it('has a prefix of 39 and a length of 14', function() {
    if (detectNetwork('39345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
 
  });

});

describe('American Express', function() {
  // prefix is 34 or 37
  // length is 15
  var assert = function(isTrue) {
    if(!isTrue) {
      throw new Error('Test failed');
    }
 
  };

  it('has a prefix of 34 and a length of 15', function() {
    assert(detectNetwork('343456789012345') === 'American Express');
  });

  it('has a prefix of 37 and a length of 15', function() {
    assert(detectNetwork('373456789012345') === 'American Express');
  });

});

describe('Visa', function() {
  // prefix is 4
  // length is 13, 16, or 19
  var assert = chai.assert;
 

  it('has a prefix of 4 and a length of 13', function() {
    assert(detectNetwork('4234567890123') === 'Visa');
  });

  it('has a prefix of 4 and a length of 16', function() {
    assert(detectNetwork('4234567890123456') === 'Visa');
  });

  it('has a prefix of 4 and a length of 19', function() {
    assert(detectNetwork('4234567890123456789') === 'Visa');
  });

});

describe('MasterCard', function() {
  // prefix is 51, 52, 53, 54, or 55
  // length is 16
 
  it("has a prefix of 51 and a length of 16", function() {
    expect(detectNetwork('5134567890123456')).to.equal('MasterCard');
  });
 
  it("has a prefix of 52 and a length of 16", function() {
    expect(detectNetwork('5234567890123456')).to.equal('MasterCard');
  });
 
  it("has a prefix of 53 and a length of 16", function() {
    expect(detectNetwork('5334567890123456')).to.equal('MasterCard');
  });
  
  it('has a prefix of 54 and a length of 16', function() {
    expect(detectNetwork('5434567890123456')).to.equal('MasterCard');
  });
 
  it('has a prefix of 55 and a length of 16', function() {
    expect(detectNetwork('5534567890123456')).to.equal('MasterCard');
  })
 
});

describe('Discover', function() {
  // prefix is 6011, 644-649, or 65
  // length is 16 or 19
  it('has a prefix of 6011 and a length of 16', function () {
    expect(detectNetwork('6011567890123456')).to.equal('Discover');
  });

  it('has a prefix of 6011 and a length of 19', function () {
    expect(detectNetwork('6011567890123456789')).to.equal('Discover');
  });

  it('has a prefix of 65 and a length of 16', function () {
    expect(detectNetwork('6534567890123456')).to.equal('Discover');
  });

  it('has a prefix of 65 and a length of 19', function () {
    expect(detectNetwork('6534567890123456789')).to.equal('Discover');
  });

  for (var i = 644; i <= 649; i++) {
    (function(prefix) {
      it('has a prefix of ' + prefix + ' and a length of 16', function () {
        expect(detectNetwork(prefix.toString() + '4567890123456')).to.equal('Discover');
      });

      it('has a prefix of ' + prefix + ' and a length of 19', function () {
        expect(detectNetwork(prefix.toString() + '4567890123456789')).to.equal('Discover');
      });
    })(i);
  }

});

describe('Maestro', function() {
  // prefix is 5018, 5020, 5038, or 6304
  // length is 12-19
  for (var leng = 12; leng <= 19; leng++) {
    (function (len) {
      it('has a prefix of 5018 and a length of ' + len, function () {
        expect(detectNetwork('5018' + '0'.repeat(len - 4))).to.equal('Maestro');
      });
      
      it('has a prefix of 5020 and a length of ' + len, function () {
        expect(detectNetwork('5020' + '0'.repeat(len - 4))).to.equal('Maestro');
      });
      
      it('has a prefix of 5038 and a length of ' + len, function () {
        expect(detectNetwork('5038' + '0'.repeat(len - 4))).to.equal('Maestro');
      });
      
      it('has a prefix of 6034 and a length of ' + len, function () {
        expect(detectNetwork('6304' + '0'.repeat(len - 4))).to.equal('Maestro');
      });
    })(leng);
  }

});

describe('should support China UnionPay', function () {
  // prefix is 622126-622925, 624-626, or 6282-6288
  // length is 16-19
  for (var l = 16; l <= 19; l++) {
    (function (leng) {
      // checking 622126-622925
      for (var i = 622126; i <= 622925; i++) {
        (function(prefix) {
          it('has a prefix of ' + prefix + ' and a length of ' + leng, function () {
            expect(detectNetwork((prefix.toString() + '7890123456789').substr(0, leng))).to.equal('China UnionPay');
          });
        })(i);
      }

      // checking 624-626
      for (var i = 624; i <= 626; i++) {
        (function(prefix) {
          it('has a prefix of ' + prefix + ' and a length of ' + leng, function () {
            expect(detectNetwork((prefix.toString() + '4567890123456789').substr(0, leng))).to.equal('China UnionPay');
          });
        })(i);
      }

      // checking 6282-6288
      for (var i = 6282; i <= 6288; i++) {
        (function(prefix) {
          it('has a prefix of ' + prefix + ' and a length of ' + leng, function () {
            expect(detectNetwork((prefix.toString() + '567890123456789').substr(0, leng))).to.equal('China UnionPay');
          });
        })(i);
      }
    })(l);
  }

});

describe('should support Switch', function () {
  // prefix is 4903, 4905, 4911, 4936, 564182, 633110, 6333, or 6759
  // length is 16, 18, or 19
  var lengs = [16, 18, 19];
  var prefixes = ['4903', '4905', '4911', '4936', '564182', '633110', '6333', '6759'];
  for (var index = 0; index < lengs.length; index++) {
    var l = lengs[index];
    (function(len) {
      // store current length in variable
      for (var prefixIndex = 0; prefixIndex < prefixes.length; prefixIndex++) {
        (function(prefix) {
          it('has a prefix of ' + prefix + ' and a length of ' + len, function () {
            expect(detectNetwork((prefix.toString() + '12345678901234567890').substr(0, len))).to.equal('Switch');
          });
        })(prefixes[prefixIndex]);
      }
    })(l)
  }

});
