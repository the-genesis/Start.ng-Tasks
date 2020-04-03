//create array of objects
let data = [
	{principal: 2500, time: 1.8},
	{principal: 1000, time: 5},
	{principal: 3000, time: 1},
	{principal: 2000, time: 3}
];

//declare interestCalculator function
function interestCalculator (array) {
	var rate;
	var interest;
	let interestData = [
	{principal: 0, time: 0},
	{principal: 0, time: 0},
	{principal: 0, time: 0},
	{principal: 0, time: 0}
	];
	
	for(let i=0; i<array.length; i++) {
		//conditionals to determine rate
		if(array[i].principal >= 2500 && array[i].time > 1 && array[i].time < 3) {
			rate = 3;
		}
		else if(array[i].principal >= 2500 && array[i].time >= 3) {
			rate = 4;
		}
		else if(array[i].principal < 2500 || array[i].time <= 1) {
			rate = 2;
		}
		else rate = 1;

		//calculate interest
		interest = (array[i].principal * array[i].time * rate)/100;

		//populate interestData object array with results of interest calculaltion
		interestData[i].principal = array[i].principal;
		interestData[i].rate = rate;
		interestData[i].time = array[i].time;
		interestData[i].interest = interest;
	}

	console.log(interestData);
	return interestData;
}

interestCalculator(data);