var x = prompt("Choose your number!");
var multiples = [];
for (var x=x-1; x>0; x--)
	{
	if (x%3===0 || x%5===0)
		{multiples.push(x);}
	}
function getSum (total, num)
	{return total+num;}
window.alert(multiples.reduce(getSum))