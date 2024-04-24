

interface Person{
    name : string;
    age : number;
    speak():void;
}

const admi : Person = {
    name : "Thomas",
    age : 30,
    speak() {
        console.log(`Hello I am a person`)
    },
}

console.log(admi)


class Humans implements Person{
    constructor(public name:string,public age:number){}

    speak(): void {
        console.log(`My name is ${this.name} and age is ${this.age}`)
    }
}

const human = new Humans("Shelby",16)
human.speak()