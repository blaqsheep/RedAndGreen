var passed = 0;
var failed = 0;
var total = 0;

var assert = {
	equals: function(expectedResults, returnResults){
		total = passed + failed;

		var newElement = document.createElement('div');
		newElement.id ="myElement" + total;
		newElement.className = "test";
		document.getElementById("tests").appendChild(newElement);

		var myDiv = new RedOrGreen(newElement.id);

		if(expectedResults === returnResults){
			passed++;
			myDiv.makeGreen();
		}
		else{
			failed++;
			myDiv.makeRed();
		}

		total = passed + failed;
		document.getElementById("progress").innerHTML='Passes: '+passed+' Failed: '+failed+' Total tests: '+total;
	}
};

var TestMyCode = {
	run:function(testfunction,functionreturn){
		functionreturn(assert);
	}
};