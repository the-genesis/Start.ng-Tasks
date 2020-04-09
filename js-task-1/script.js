//Add name to variable
var name = "Anosike Genesis";

//Add courses registered to array
var courses = ["UI/UX Design", "HTML", "CSS", "JavaScript"];

//Displaying even numbers
var numbers = [];

//conditionals for printing odd or even numbers
if(courses.length%2 == 0) {
	for(i=1; i<=200; i++) {
		if(i%2 == 0) {
			numbers.push(i);
		}
	}
}

else if(courses.length%2 != 0) {
	for(i=1; i<=200; i++) {
		if(i%2 != 0) {
			numbers.push(i);
		}
	}
}

//display all variables
console.log(name);
console.log(courses);
console.log(numbers);