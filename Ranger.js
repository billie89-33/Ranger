
export default class Ranger {
  constructor(name, color, animalSpirit) {
    this.name = name;
    this.color = color;
    this.animalSpirit = animalSpirit;
    this.hp = 100;
    this.isTransformed = false;
  }

  transform() {
    this.isTransformed = true;
    console.log(`${this.name} transforms! Gao Access!!`);
  }
  rollCall() {
    console.log(`I am the ${this.color} warrior!`);
  }
  callAnimalSpirit() {
    if (this.isTransformed) {
      console.log(`${this.name} calls upon the power of the ${this.animalSpirit}!`);
    } else {
      console.log(`${this.name} needs to transform first!`);
    }
}
   static teamUp(ranger1, ranger2) {
    console.log(`${ranger1.name} and ${ranger2.name} team up to fight evil!`);
  }
  eat () {
    this.hp += 20;  
    console.log(`${this.name} eats and restores health. HP is now ${this.hp}`);
  }
}


