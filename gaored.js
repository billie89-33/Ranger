import Ranger from "./Ranger.js";

class Gaored extends Ranger {
  constructor(name, color, animalSpirit) {
    super(name, color, animalSpirit);
    this.weapon = "Lion Fang";
  }
  shout() {
    if (this.isTransformed) {
      console.log(`${this.color} : สิงห์หนุ่มผู้ร้อนแรง ${this.color}`);
    } else {
      console.log(`${this.name} : ฉันคือคุณหมอ ${this.name}`);
    }
  }

  transform() {
    this.hp += 9999999;
    super.transform();
    this.name = "Gao Red";
    console.log(`I am ${this.name}`);
  }

  aftertransform() {
    console.log(`${this.name} แปลงร่างเป็น Gao Red!. HP is now ${this.hp}`);
  }

  callAnimalSpirit() {
    if (this.isTransformed) {
      console.log(
        `${this.color} ขอเรียกวิญญาณสรรพสัตว์ มาเล้ย! ${this.animalSpirit}!`,
      );
    } else {
      console.log(`${this.name} ไอ้สิงโตตุ้ยดุ้ย ทำไมไม่ฟังเสียงฉัน !!`);
    }
  }
}

export default Gaored;
