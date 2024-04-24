var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(name, age, species) {
        this.name = name,
            this.age = age,
            this.species = species;
    }
    Animal.prototype.move = function (distance) {
        console.log("".concat(this.name, " of ").concat(this.age, " from ").concat(this.species, " moved ").concat(distance));
    };
    Animal.prototype.growOlder = function () {
        this.age++;
        console.log("".concat(this.name, " is now ").concat(this.age, " older"));
    };
    Animal.prototype.revealSpecies = function () {
        console.log("".concat(this.name, " is from ").concat(this.species, " species"));
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name, age) {
        return _super.call(this, name, age, "Dog") || this;
    }
    Dog.prototype.Birthday = function () {
        this.growOlder();
    };
    return Dog;
}(Animal));
var dog = new Dog("Tyson", 5);
// members
console.log(dog.name);
// console.log(dog.species) // private h 
// console.log(dog.age) // protected h 
// methods
dog.Birthday();
dog.move(17);
// dog.growOlder()// protected h
// dog.revealSpecies()//private h
