" use strict ";

/*
function PetClass(){
  this.supertest = superTest;
}

function Dog(){
  this.inheritFrom = PetClass;
  this.inheritFrom();
  this.speak = speak;
}

function superTest(){
  return "superTest";
}

function speak(){
  return "Woof";
}
*/


  var Pet = function(name,type){
      this.name = name;
      this.type = type;
      };
  Pet.prototype.speak = function(){
    display.innerHTML += "I'm a pet" + "<br />";
  }

  function Dog(name){
     Pet.call(this,name);
  }

  Dog.prototype = Object.create(Pet.prototype);
  Dog.prototype.constructor = Dog;
  Dog.prototype.speak = function(){
    display.innerHTML += "Woof woof"+ " my name is " + this.name + "<br />";
  };
  function Cat(name){
    Pet.call(this,name);
  }
  Cat.prototype = Object.create(Pet.prototype);
  Cat.prototype.constructor = Cat;
  Cat.prototype.speak = function(){
    display.innerHTML += "Meowth that's right!"+ " my name is " + this.name + "<br />"
  }

  function Bird(name){
    Pet.call(this,name);
  }
  Bird.prototype = Object.create(Pet.prototype);
  Bird.prototype.constructor = Bird;
  Bird.prototype.speak = function(){
    display.innerHTML += "follow me on twitter!"+ " my name is @" + this.name + "<br />"
  }
  






function PetChat(){
  var display = document.getElementById("display");
  var numPets = null;
  var allPets = [];


  var askHowMany = function(){
    return prompt("How many pets do you have?");
  };


  var askPetInfo = function(){
    for(var i=0; i<numPets; i++){
      
      var type = prompt("What is pet #" + (i+1) + "? (cat, dog, bird)");
      var name = prompt("What is pet #" + (i+1) + "'s name'?");
      var textOut = type + " " + name + "<br />";
      display.innerHTML += textOut;
      //var animal = new Pet;
      var animal;

      
        if(type =="dog"){
          animal = new Dog(name);
          allPets.push(animal);
        }else if(type == "cat"){
          animal = new Cat(name);
          allPets.push(animal);
        }else if(type == "bird"){
          animal = new Bird(name);
          allPets.push(animal);
        }else{
          animal = new Dog(name);
          allPets.push(animal);
        }
      
    };
      display.innerHTML += JSON.stringify(allPets) + "<br />";
      var arrayLength = allPets.length;
      for(var q=0;q<arrayLength;q++){
        allPets[q].speak();
      }
  };

  this.init = function(){
    while(numPets === null){
      numPets = askHowMany();
    }

    askPetInfo(); 
    }
};

var chat = new PetChat();
chat.init();
