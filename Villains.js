import Ranger from "./Ranger.js";

export default class Villians extends Ranger{
    constructor(name,tribe){
    super(name);
    this.tribe = tribe;
    this.color = "This is Villains and villains has no colors";
    this.animalSpirit = "Villains has no animal spirits";
    this.hp = 250;
    this.isTransformed = true;
    }

}

let ogre = new Villians("Gigi","Ogre")

console.log(ogre)