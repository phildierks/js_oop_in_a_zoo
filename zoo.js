function sleep(name){
console.log(name + " sleeps for 8 hours");
}

var favoriteFood = "bacon";
function eat(name,food){
    console.log(name + " eats "+ food);
    food ===favoriteFood ? console.log("YUM!! " + name + " wants more "+ food ) : sleep(name);
}

 class Tiger {

     constructor(name) {
         this.favoriteFood = "meat";
         this.name = name;
     }

     sleep() {
         console.log(this.name + " sleeps for 8 hours");
     }
     eat(food) {
     this.food = food;
     console.log(this.name + " eats " + this.food);
     this.food === this.favoriteFood ? console.log("YUM!! " + this.name + " wants more "+ this.food) : this.sleep();
     }

 }

 class Bear {

     constructor(name) {
         this.favoriteFood = "fish";
         this.name = name;

     }

     sleep() {
         console.log(this.name + " hiberantes for 4 months");
     }
     eat(food) {
         this.food = food;
         console.log(this.name + " eats " + this.food);
         this.food === this.favoriteFood ? console.log("YUM!! " + this.name + " wants more "+ this.food) : this.sleep();
     }
 }


var animalPopulation = 0;
class Animal {

    constructor(name,favoriteFood) {
        this.name = name;
        this.favoriteFood = favoriteFood;
        animalPopulation++;
    }
    sleep() {
        console.log(this.name + " sleeps for 8 hours");
    }
    eat(food) {
        console.log(this.name + " eats " + food);
        food === this.favoriteFood ? console.log("YUM!! " + this.name + " wants more "+ food) : this.sleep();
    }
    static getPopulation() {
    console.log(animalPopulation);
    }
}
class Tiger extends Animal {

    constructor(name) {
        super(name,"meat");
    }
}
class Bear extends Animal {
    constructor(name) {
        super(name,"fish");
    }
    sleep() {
        console.log(this.name + " hibernates for 4 months");
    }
}

class Unicorn extends Animal{
    constructor(name){
        super(name,"marshmallows");
    }
    sleep(){
        console.log(this.name + " sleeps in a cloud");

    }
}
class Giraffe extends Animal{
    constructor(name){
        super(name,"leaves");
    }
    eat(food){
        food === this.favoriteFood ? super.eat(food) + this.sleep(): console.log("YUCK!!! "  + this.name + " will not eat " + food);
    }
}

class Bee extends Animal{
    constructor(name){
        super(name,"ice cream");
    }
    eat(food){
        food === this.favoriteFood ? super.eat("ice cream") + this.sleep() : console.log("YUCK!!!"  + this.name + "will not eat" + this.food);
    }
    sleep(){
        console.log(this.name + " never sleeps");
    }
}

class Zookeeper{
    constructor (name){
        this.name = name;
    }
    feedAnimals(animals,food){
        console.log(this.name + " is feeding " + food + " to "  + animals.length + " of the total Population of " +  animalPopulation);
        for(var i = 0; i< animals.length; i++){
            animals[i].eat(food);
        }
    }
}


