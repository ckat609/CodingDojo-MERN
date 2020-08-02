class Card {
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
        return this;
    }
    showStats() {
        console.log(`Name: ${this.name}`);
        console.log(`Cost: ${this.cost}`);
    }
}

class Unit extends Card {
    constructor(name, cost, power, res) {
        super(name, cost);
        this.power = power;
        this.resilience = res;
        return this;
    }

    attack(target) {
        target.resilience -= this.power;
        return this;
    }

    showStats() {
        super.showStats();
        console.log(`Power: ${this.power}`);
        console.log(`Resilience: ${this.resilience}`);
    }
}

class Effect extends Card {
    constructor(name, cost, mag, attr) {
        super(name, cost);
        this.magnitude = mag;
        this.cardAttr = attr;
        return this;
    }

    play(target) {
        target[this.cardAttr] += this.magnitude;
        console.log(`${this.name}: ${(this.magnitude < 0)?"Lower":"Raise"} ${target.name}'s ${this.cardAttr} by ${Math.abs(this.magnitude)}`)
        return this;
    }
}

let u1 = new Unit("Armando", 10, 5, 20);
let u2 = new Unit("Belter", 10, 5, 20);
let e1 = new Effect("Raise the dead", 2, 3, "power")
let e2 = new Effect("The plague", 3, -2, "resilience")
let e3 = new Effect("Hand of god", 2, 10, "resilience")
u1.showStats();
console.log("*********");
e1.play(u1);
u1.showStats();
console.log("*********");
e2.play(u1);
u1.showStats();
console.log("*********");
e3.play(u1);
u1.showStats();
console.log("*********");
u1.attack(u2);
u2.showStats();
console.log("*********");