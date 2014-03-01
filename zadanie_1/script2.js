/*window.onload = function () {
   var div = document.getElementById('example');
//   
//   div.innerHTML = cat1;
   
  document.getElementById('animal').onchange = function (evt) {
    
    var value = evt.target.value;
    var animal;
    switch (value){
        case 'cat':
             animal = new Cat ('Eva', 'мяу', 5);
              break;
        case 'dog':
              animal = new Dog ('Buch', 'гав', 10);
              break;
        case 'cow':
              animal = new Cow ('Cow', 'mуy', 3);
     }

  div.innerHTML = animal;
        
        
   };
   
//   document.getElementById('zad').onclick = function (evt) {
//       
//       var animal = evt.target.innerHTML;
//       alert(animal);
//   };
};

function Animal(name, voice, speed){
    this.name = name;
    this.voice = voice;
    this.speed = speed;
}

Animal.prototype.toString = function () {
   return "Имя животного: " + this.name + "<br />" + "Голос животного: " + this.voice + "<br />" + "Скорость животного: " + this.speed + " км/ч";  
};

function Cat (name, voice, speed){
    Animal.call(this,name, voice, speed);
};

Cat.prototype = new Animal ();
Cat.prototype.constructor = Cat;

function Dog (name, voice, speed){
    Animal.call(this,name, voice, speed);
};

Dog.prototype = new Animal ();
Dog.prototype.constructor = Dog;

function Cow (name, voice, speed){
    Animal.call(this,name, voice, speed);
};

Cow.prototype = new Animal ();
Cow.prototype.constructor = Cow;*/



function Operation (){
  this.exec = function (){};
}