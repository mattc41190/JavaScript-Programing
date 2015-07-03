//ObjectCreationCode
"use strict";
var person = 
{
	firstName:"John", 
	lastName:"Doe", 
	age:50,
	eyeColor:"blue"
};

document.getElementById('objectLiteralExample').innerHTML = person.firstName;

var animal = new Object();
animal.name = "Patches";
animal.humanYears = 15;
animal.animalYears = 50;
animal.coatColor = "brown"; 

document.getElementById('newObjectExample').innerHTML = animal.name;

function car(make, model, year, transmission) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.transmission = transmission;
    this.modelYear = function()
	{
		console.log(this.model +", "+this.year);
	}
}
var firstCar = new car("Toyota", "Truck X50", 1989, "Auto");
var currentCar = new car("Ford", "Focus", 2008, "Auto");

document.getElementById('constructorObjectExample').innerHTML = currentCar.make +", "+ currentCar.model;