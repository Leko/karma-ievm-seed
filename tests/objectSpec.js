
var MyObject = require('../src/object.js');

describe('MyObject#extend', function() {
	it('should work Object#assign on es5 incompatible browser', function() {
		var expected = {
				hoge: 1,
				foo: false,
			},
			actual = MyObject.extend({ hoge: 100, foo: true}, { hoge: 1 }, { foo: false });

		expect(actual).toEqual(expected);
	});
});
