// single inheritance

class Animal{
    name : string;

    constructor(name:string){
        this.name = name;
    }

    move(distance:number = 0) {
        console.log(`${this.name} moved ${distance} meters`)
    }
}

class Dog extends Animal{
    
    breed : string;

    constructor(name:string , breed:string){
        super(name);
        this.breed = breed;
    }

    bark(){
        console.log('bhau bhau')
    }
}

const dog = new Dog("Tyson","Platinum mislayer");
dog.bark();
dog.move(10)


// Multilevel
class Bird extends Animal{
   
    fly(distance :  number){
        console.log(`${this.name} flew ${distance} meters`)
    }
    
}

class Parrot extends Bird{
    speak(){
        console.log("I can speak")
    }
}

const parrot = new Parrot("Pakshi")
parrot.fly(10);
parrot.move();
parrot.speak()


// Heirarchical 
class Cat extends Animal {
    meow() {
        console.log("Meow!");
    }
}

const cat = new Cat("Pitty");
cat.move(3); 
cat.meow();  