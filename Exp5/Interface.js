var admi = {
    name: "Thomas",
    age: 30,
    speak: function () {
        console.log("Hello I am a person");
    },
};
console.log(admi);
// with class
var Humans = /** @class */ (function () {
    function Humans(name, age) {
        this.name = name;
        this.age = age;
    }
    Humans.prototype.speak = function () {
        console.log("My name is ".concat(this.name, " and age is ").concat(this.age));
    };
    return Humans;
}());
var human = new Humans("Shelby", 16);
human.speak();
