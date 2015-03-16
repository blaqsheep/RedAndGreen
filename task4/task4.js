(function(){
	var count = 1;

		document.getElementById("color").addEventListener('click',function(myColors){
			count ++;

			if(count %2 ===0){
				document.getElementById("square").style.backgroundColor = 'Red';
					document.getElementById("color").innerHTML = "Make Green";
			}
			else{
				document.getElementById("square").style.backgroundColor = 'Green';
				document.getElementById("color").innerHTML = "Make Me Red";
			}
		});
}
	)()