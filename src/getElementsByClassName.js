// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

//You should use document.body, element.childNodes, and element.classList
var getElementsByClassName = function(className) {
  // your code here
  var elements = [];

  var traverseDOM = function(nodes) {
  	for (var i = 0; i < nodes.length; i++) {
  		var classList = nodes[i].classList;
  		
  		if (classList !== undefined && classList.contains(className)) {
  			elements.push(nodes[i]);
  		}

  		if (nodes[i].childNodes.length > 0) {
  			traverseDOM(nodes[i].childNodes);
  		}
  	}
  };

  if (document.body.classList.contains(className)) {
  	elements.push(document.body);
  }

  traverseDOM(document.body.childNodes);

  return elements;
};
