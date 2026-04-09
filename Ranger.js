export default class Ranger {
  constructor(name, color, animalSpirit) {
    this.name = name;
    this.color = color;
    this.animalSpirit = animalSpirit;
    this.hp = 100;
    this.isTransformed = false;
    this.combatPower = 0;
  }
  transform() {
    this.isTransformed = true;
    let scale = Math.random()*10
    this.combatPower = Math.floor((Math.random()*100)*scale)
    console.log(`${this.name} transforms! Gao Access!!`);
  }
  rollCall() {
    this.hp += 500;
    console.log(`I am the ${this.color} warrior! My buff Hp + ${this.hp}`);
  }
  eat(){
    this.hp += 20;
    console.log(`${this.name} eats. HP: ${this.hp}`);
  }
  callAnimalSpirit() {
    if (this.isTransformed) {
      console.log(`${this.name} calls upon the power of the ${this.animalSpirit}`);
    } else {
      console.log(`${this.name}  needs to transform first!`);
    }
  }
  static teamUp(ranger1, ranger2) {
    console.log(`${ranger1.name} and ${ranger2.name} team up to fight evil!`);
  }
  combat(enemy) {
    if (this.combatPower > enemy.combatPower) {
      console.log(`The battle has begin ${this.name} combat power is ${this.combatPower} and ${enemy.name} combat power is ${enemy.combatPower}`)
      console.log(`${this.name} is Victory`);
    } else {
      console.log(`The battle has begin ${this.name} combat power is ${this.combatPower} and ${enemy.name} combat power is ${enemy.combatPower}`)
      console.log(`${this.name} is Defeated by ${enemy.name}`);
    }
  }


}