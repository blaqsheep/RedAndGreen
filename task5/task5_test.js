	
(function ()
{
	setBackgroundColor('mySquare', 'green');
	if(document.getElementById('mySquare').style.backgroundColor === 'green')
	{
		window.alert('Pass');
	}
	else
	{
		window.alert('Fail');
	}
		


	setBackgroundColor('mySquare', 'red');
	if(document.getElementById('mySquare').style.backgroundColor === 'red')
	{
		window.alert('Pass');

	}	else
		{
			window.alert('Fail');
		}
}) ();