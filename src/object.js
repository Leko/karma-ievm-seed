
function MyObject() {}

function clone(obj) {
	var ret = {};
	for(var p in obj) {
		if(!obj.hasOwnProperty(p)) continue;

		ret[p] = obj[p];
	}
	return ret;
}

function mergeObject(a, b) {
	var ret = clone(a);
	for(var p in b) {
		if(!b.hasOwnProperty(p)) continue;

		ret[p] = b[p];
	}

	return ret;
}

MyObject.extend = function() {
	var args = [].slice.call(arguments);
	return args.reduce(mergeObject);
};

module.exports = MyObject;
