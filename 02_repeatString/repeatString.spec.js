const repeatString = require('./repeatString');

describe('repeatString', function()  {
  test('repeats the string', function()  {
    expect(repeatString('hey', 3)).toEqual('heyheyhey');
  });
  test('repeats the string many times', function() {
    expect(repeatString('hey', 10)).toEqual('heyheyheyheyheyheyheyheyheyhey');
  });
  test('repeats the string 1 times', function() {
    expect(repeatString('hey', 1)).toEqual('hey');
  });
  test('repeats the string 0 times', function() {
    expect(repeatString('hey', 0)).toEqual('');
  });
  test('returns ERROR with negative numbers', function() {
    expect(repeatString('hey', -1)).toEqual('ERROR');
  });
  test('repeats the string a random amount of times', function () {
    /*The number is generated by using Math.random to get a value from between
    0 to 1, when this is multiplied by 1000 and rounded down with Math.floor it
    equals a number between 0 to 999 (this number will change everytime you run
    the test).*/

    // DO NOT use Math.floor(Math.random() * 1000) in your code,
    // this test generates a random number, then passes it into your code with a function parameter.
    // If this doesn't make sense, you should go read about functions here: https://www.theodinproject.com/paths/foundations/courses/foundations/lessons/fundamentals-part-3
    const number = Math.floor(Math.random() * 1000)
    /*The .match(/((hey))/g).length is a regex that will count the number of heys
    in the result, which if your function works correctly will equal the number that
    was randomaly generated. */
    expect(repeatString('hey', number).match(/((hey))/g).length).toEqual(number);
  });
  test('works with blank strings', function() {
    expect(repeatString('', 10)).toEqual('');
  });
});
