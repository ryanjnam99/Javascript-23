class Ninja {
    constructor(name) {
        this.name = name;
        this.health = 90;
        this.speed = 3;
        this.strength = 3;
    }
    sayName() {
        console.log(`My name is ${this.name}`);
        return this;
    }
    showStats() {
        console.log(`Name: ${this.name}\nHealth: ${this.health}\nSpeed: ${this.speed}\nStrength: ${this.strength}\n`);
        return this;
    }
    drinkSake() {
        this.health += 10;
        console.log(`Health went up to ${this.health}.`);
        return this;
    }
}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName().showStats().drinkSake();
