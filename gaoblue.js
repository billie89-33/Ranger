import Ranger from './Ranger.js';



export default class GaoBlue extends Ranger {
    constructor(name, color, animalSpirit) {
        super(name, color, animalSpirit);
    }

    human(){
        console.log(`My Name is ${this.name}.hp now ${this.hp}`)
    }
    checkmyhp() {
        this.hp
        console.log(`${this.name} my hpNow!!${this.hp}`)
    }
}

