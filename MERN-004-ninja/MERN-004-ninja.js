class Ninja {
    constructor(name, health) {
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
        return this;
    }

    sayName() {
        console.log("***SAY NAME***")
        console.log(this.name);
        return this;
    }

    showStats() {
        console.log("***SHOW STATS***")
        console.log(`Name: ${this.name}`);
        console.log(`Strength: ${this.strength}`);
        console.log(`Speed: ${this.speed}`);
        console.log(`Health: ${this.health}`);
        return this;
    }

    drinkaSake() {
        console.log("***DRANK SAKE***")
        this.health += 10;
        return this;
    }
}

let n1 = new Ninja("Armando", 100);

n1.sayName().showStats().drinkaSake().showStats();