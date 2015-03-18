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
			document.getElementById(newElement.id).innerHTML='Expecting "'+expectedResults+' Recieved "'+returnResults+'" Test passed!';
			
		}
		else{
			failed++;
			myDiv.makeRed();
			document.getElementById(newElement.id).innerHTML='Expecting "'+ returnResults+'"" Recieved " '+expectedResults+' ", thus test failed!';
		}

		total = passed + failed;

		//document.getElementById(newElement.id).innerHTML= 'passed: '+passed;
		document.getElementById("progress").innerHTML='Passed: '+passed+' Failed: '+failed+' Total tests: '+total;
		//document.write(expectedResults)
	}
};

var TestMyCode = {
	run:function(testfunction,functionreturn){
		functionreturn(assert);
	}
};