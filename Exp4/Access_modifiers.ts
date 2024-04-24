class Animal{
    public name : string;
    protected age : number;
    private species : string;

    constructor(name : string , age : number , species : string){
        this.name = name,
        this.age = age,
        this.species = species
    }

    public move(distance: number): void{
        console.log(`${this.name} of ${this.age} from ${this.species} moved ${distance}`)
    }

    protected growOlder(): void{
        this.age++;
        console.log(`${this.name} is now ${this.age} older`)
    }

    private revealSpecies() : void{
        console.log(`${this.name} is from ${this.species} species`)
    }

}

class Dog extends Animal{
    constructor(name:string,age:number){
        super(name,age,"Dog")
    }

    public Birthday():void{
        this.growOlder()
    }
}

const dog = new Dog("Tyson",5);

// members
console.log(dog.name)
// console.log(dog.species) // private h 
// console.log(dog.age) // protected h 


// methods
dog.Birthday();
dog.move(17);
// dog.growOlder()// protected h
// dog.revealSpecies()//private h