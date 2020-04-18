//declar function checkNum
function checkNum (num) {
var array = [];

//declare loop to iterate over num
for (let i = 1; i <= num; i++) {

	//run modulo checks, using continue to skip further 
	//checks for numbers with multiple factors
	if(i%2 == 0 || i%3 == 0 || i%5 == 0) {
		if(i%2 == 0 && i%3 == 0 && i%5 == 0) {
			array.push("yu-gi-oh");
			continue;
		}
		if(i%2 == 0 && i%3 == 0) {
			array.push("yu-gi");
			continue;
		}
		if(i%2 == 0 && i%5 == 0) {
			array.push("yu-oh");
			continue;
		}
		if(i%3 == 0 && i%5 == 0) {
			array.push("gi-oh");
			continue;
		}
		if(i%2 == 0) {
			array.push("yu");
		}
		if(i%3 == 0) {
			array.push("gi");
		}
		if(i%5 == 0) {
			array.push("oh");
		}
	}
	else {
		array.push(i);
	}
}

//return
return array;
}

checkNum(100);
checkNum(49);