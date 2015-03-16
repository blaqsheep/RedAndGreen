//The TestMyCode implementation must be here
var passed = 0;
var failed = 0;
var total = 0;

var assert = {
	equals: function(expectedResults, returnResults){
		total = passed+failed;

		var newElement = document.createElement('div');
		newElement.id = "mySquare"+total;
		//newElement.className = "mySquare";
		document.body.appendChild(newElement)
		//document.getElementById("mySquare").appendChild(newElement)

		var myDiv = new RedOrGreen(newElement.id)

		if (expectedResults === returnResults) {
			passed++;
			myDiv.makeGreen();
		}
		else{
			failed++
			myDiv.makeRed();
		}
		total = passed+failed;
		document.getElementById(newElement.id).innerHTML = 'passed: '+passed+' failed: '+failed+' total tests:'+total;
	}	

};
 	var TestMyCode ={
 		run:function(testfunction, functiontoreturn){
 			functiontoreturn(assert)
 		}
 	};