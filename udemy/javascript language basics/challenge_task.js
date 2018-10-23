/*

var height;
var age;
var score;

var John;
var Mark;
var Bob;


height = prompt("What is John's height: ?");
age = prompt("What is John's age: ?");
score = height + (age * 5);
John = score;

height = prompt("What is Mark's height: ?");
age = prompt("What is Mark's age: ?");
score = height + (age * 5);
Mark = score;

height = prompt("What is Bob's height: ?");
age = prompt("What is Bob's age: ?");
score = height + (age * 5);
Bob = score;


if(John > Mark){
	console.log("John Win!");
}else if(John == Mark){
	console.log("both are the same");
}else{
	console.log("Mark Win!");
}


if(John > Mark && John > Bob){
	console.log("John Win!" + John + " point");
}else if(Mark > Bob && Mark > John){
	console.log("Mark Win!");
}else if(Bob > John && Bob > Mark){
	console.log("Bob Win!");
}else if(John == Mark && Mark == Bob){
	console.log("both are the same");
}

/*
player with his height + five times his age
*/

//calculate score

function printFullAge(years){

	var ages = [];
	var fullAges= [];

	for(var i=0; i<years.length; i++){
		ages[i] = 2018 - years[i];
	}

	for(var i=0; i<ages.length; i++){

		if(ages[i] >= 18){
			console.log("Person" + (i + 1) + " is " + ages[i] + " years old, and is of full age.");
			fullAges.push(true);
		}else{
			console.log("Person" + (i + 1) + " is " + ages[i] + " years old, and is not of full age.");
			fullAges.push(false);
		}

	}

	return fullAges;
}


var years = [1965, 2008, 1992];
var full_1 = printFullAge(years);
var full_2 = printFullAge([1965, 2008, 1992, 1988]);