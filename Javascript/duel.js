class Card {
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
        return this;
    }
}

class Unit extends Card {
    constructor(name, cost, power, res) {
        super(name, cost);
        this.power = power;
        this.res= res;
        return this;
    }
    attack (target) {
        target.res -= this.power;
        console.log(`${target.name} has been damaged by ${this.power}.`);
        if (target.res <= 0) {
            console.log(`${target.name} has been defeated.`);
        }
        else {
        console.log(`Their resilence is currently ${target.res}.`);
        }
        return this;
    }
}

class Effect extends Unit{
    constructor (name, cost, text, stat, magnitude) {
        super(name, cost);
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
        return this;
    }
    play( target ) {
        if( target instanceof Unit ) {
            if (this.stat == "resilience") {
                target.res += this.magnitude;
            }
            else {
                target.power += this.magnitude;
            };
            console.log(`${this.text}`);
        } 
        else {
            throw new Error( "Target must be a unit!" );
        }
    }
    
}


const red = new Unit ("Red Belt Ninja", 3, 3, 4);
const hard = new Effect ("Hard Algorithm", 2, "increase target's resilience by 3", "resilience", 3);
hard.play(red);
const black = new Unit ("Black Belt Ninja", 4, 5, 4);
const unhandled = new Effect ("Unhandled Promise Rejection", 1, "reduce target's resilience by 2", "resilience", -2);
unhandled.play(red);
const pair = new Effect ("Pair Programming", 3, "increase target's power by 2", "power", 2);
pair.play(red);
red.attack(black);
