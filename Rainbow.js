import Ranger from './Ranger.js';


export default class Rainbow extends Ranger {
    constructor(name, color, animalSpirit) {
        super(name, color, animalSpirit);
    }

    human() {
        console.log(`My Name is ${this.name}. hp now ${this.hp}`)
    }
    DivineBeast() {
        console.log(`${this.animalSpirit} is my animalSpirit`)
    }
    checkmystatus() {
        this.callAnimalSpirit
        console.log(`นอน`)
    }
    checkmyhp() {
        this.hp
        console.log(`${this.name} my hpNow!!${this.hp}`)
    }
    makeSound() {
        console.log(`${this.name} makes a rainbow-colored sound!`);
    }
    transform() {
        this.hp += 999899;
        super.transform();
        this.name = "Rainbow Warrior";
        console.log(`I am ${this.name}`);
    }
    
    aftertransform() {
        console.log(`${this.name} aftertransform into a Rainbow Ranger!. HP is now ${this.hp}`);
    }
    makeSound() {
        console.log(`${this.name} say ระวังโดนตุ๊ยดุ๊ยนะค้าบบบ`)
    }

}



