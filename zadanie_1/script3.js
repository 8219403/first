//Паттерн ДЕКОРАТОР

function Leg () {
	this.cost = function (){
		return 0;
	};
}

function Bus (Leg){
	this.cost = function (){
		return Leg.cost() + 50;
	};

}

function Train (Leg){
	this.cost = function () {
		return Leg.cost() + 100;
	};

}

function Plain (Leg) {
	this.cost = function () {
		return Leg.cost() + 500;
	};

}

var Leg = new Leg ();
Leg = new Bus (Leg);
Leg = new Train (Leg);
Leg = new Plain (Leg);
alert ("Стоимость поездки равна: " + Leg.cost() + " $");
console.log("Стоимость поездки равна: " + Leg.cost() + " $");