//Quick Recap

//Data types

//String
//var name = "John";

//integer
//var age = 26;

//boolean
//var fullAge = true;



//Zusamenfassen
//console.log (name + age)

//pop up panel
//var lastName = prompt("What is the last name? ")
//console.log(lastName);

//alert window
//alert(""Name is: " + name + " lastName: " + lastName);


/*
var now = 2016;
var birthOfYear = 1991;
//math expression
ageJohn = now - birthOfYear;
//console.log(ageJohn);
*/


//postfix or prefix
//var i = 0;
//i++;
//i = i + 1;


//i *= 2;
//i = i * 2;
//console.log(i);

/* if else
isMarried = false;
if (isMarried) {
	console.log(name + ' is married');
}else{
	console.log(name + ' will maried soon :)');
}
if(23 === 23){
	console.log('yes');
}else{
	console.log('no');
}
*/

/*
var age = 25;

if(age < 20){
	console.log("is a teenager");
}else if(age > 20 && age < 30){
	console.log ("young");
} else{
	console.log("is a man");
}


var job = 'teaher';

job = prompt("What?");

switch(job){
	
	case 'teacher':
	console.log("John is teacher");
	break;
	
	case 'cop':
	console.log("John is cop");
	break;

	case 'driver':
	console.log("is driver");
	break;

	default:
	console.log("John is something else");

}

*/

/*
Functions

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1969);
var ageMary = calculateAge(1948);

//console.log(ageJohn);
//console.log(ageMike);
//console.log(ageMary);

function calculateAge(yearOfBirth){
	var age = 2016 - yearOfBirth;
	return age;
}

function yearsUntilRetirement(name, year){
	var age = calculateAge(year);
	var retirement = 65 - age;

	if(retirement >= 0){
		console.log(name + 'retires in ' + retirement + 'years.');
	}else{
		console.log(name + 'has already retired.');
	}
}

yearsUntilRetirement("John", year);

*/


/*
Function Expression

function varExample(par){

}

//almost same but order is different
var varExample = function(par){

}
*/


/*
//array
var names = ['John', 'Jane', 'Mark'];
var years = new Array(1990, 1969, 1948);

//console.log(names[2]);

//the 1 position was changed
names[1] = 'Ben';
//console.log(names);

var John = ['John', 'Smith', 1990, 'teacher', false];f
//console.log(John);

//like same as add in the last order
John.push('blue');

//add in the first order
John.unshift('Mr.');

//remove at the end
John.pop();

///remove first element
John.shift();

//return position or index of array! (pop will be appear)
//alert(John.indexOf('Smith'));

//console.log(John);
*/



/*
//if element teacher is in array! and it is in array!

//if element not in array, then it returns -1

if (John.indexOf('teacher') === -1) {
	//console.log('not a teacher')
}
*/


/*
//create OBJECT_1 first way

var john = {
	name: 'John',
	lastName: 'Smith',
	yearOfBirth: 1990,
	job: 'teacher',
	isMarried: false

//same initialization
//console.log(john.lastName);
//console.log(john['lastName']);

//same but different way of init.
//var xyz = 'job';
//console.log(john[xyz]);
};
*/


//data mutation перезапись массива
//john.lastName = 'Miller';
//john['job'] = 'programmer';


/*
//create object_2 secod way
var jane = new Object();
jane.name = 'Jane';
jane.lastName = 'Smith';
jane['yearOfBirth'] = 1969;
jane['isMarried'] = true;

//console.log(jane);
*/

/*

//pattern how to make object with method!
var john = {
	name: 'John',
	lastName: 'Smith',
	yearOfBirth: 1990,
	job: 'teacher',
	isMarried: false,
	family: ['Jane', 'Mark', 'Bob'],
	
	//defining method inside of object (function expresseion)
	calculateAge: function(){
		return 2016 - this.yearOfBirth;

		//this referes to john object
		//it will calculate and assigned to john object directly
		this.age = 2016 - this.yearOfBirth;
	}
};

//call method like in java object.methdd
//console.log(john.calculateAge());


//exact same as upper function with method
var calculateAge = function function_name(argument) {
	// body...
}


*/



/*
LOOP


for (var i = 0; i < 10; i++){
	console.log(i);
}


var names = ['John', 'Jane', 'Mary', 'Mark', 'Bob'];

for(var i = 0; i < names.length; i++){
	console.log(names[i]);
}

//all is 5 variables then length-1 makes 4 variables cos array starts from 0
for(var i = names.length - 1; i > 0; i--){
	console.log(names[i]);
}

//while
var i = 0;
while (i < names.length){
	console.log(names[i]);
	i++;
}


for(var i = 1; i <= 5; i++){
	

	if(i == 3){
		continue;
	}

	console.log(i);
}


*/

