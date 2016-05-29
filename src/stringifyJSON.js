// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  if (obj === null || 
  	 typeof obj === 'number' || 
  	 typeof obj === 'boolean') {
  	return "" + obj + "";
  }
  else if (typeof obj === 'string') {
  	return '"' + obj + '"';
  }
  else if (Array.isArray(obj)) {
    var array = [];
    for (var i = 0; i < obj.length; i++) {
      array.push(stringifyJSON(obj[i]));
    }
    return '[' + array + ']';
  }
  else { 
    var objVals = [];
    for (var key in obj) {
      if (typeof obj[key] !== 'function' && obj[key] !== undefined) {
        objVals.push('"' + key + '":' + stringifyJSON(obj[key]));
      }
    }
    return '{' + objVals + '}';
  }
};
