const reverseString = require('./reverseString')

describe('reverseString', () => {
  test('reverses single word', function(){
    expect(reverseString('hello')).toEqual('olleh');
  });

  test('reverses multiple words', function(){
    expect(reverseString('hello there')).toEqual('ereht olleh')
  })

  test('works with numbers and punctuation', function(){
    expect(reverseString('123! abc!')).toEqual('!cba !321')
  })
  test('works with blank strings', function(){
    expect(reverseString('')).toEqual('')
  })
});
