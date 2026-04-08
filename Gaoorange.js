import  Ranger  from './Ranger.js';

export default class Orange extends Ranger {
    constructor(name, color){
        super(name, color)
    }

    shout() {
        console.log(`we are the people, we are ${this.name}.`)
    }

}




//     super(name, color, animalSpirit);
//     this.weapon = "Lion Fang";
//   }
//   shout() {
//     if (this.isTransformed) {
//       console.log(`${this.color} : สิงห์หนุ่มผู้ร้อนแรง ${this.color}`);
//     } else {
//       console.log(`${this.name} : ฉันคือคุณหมอ ${this.name}`);
//     }
//   }
//   callAnimalSpirit() {
//     if (this.isTransformed) {
//       console.log(
//         `${this.color} ขอเรียกวิญญาณสรรพสัตว์ มาเล้ย! ${this.animalSpirit}!`,
//       );
//     } else {
//       console.log(`${this.name} มาเลยไอ้สิงโตเปรต!`);
//     }
//   }
// }

// // From K Joe

// import Ranger from './Ranger.js';
// class Gaored extends Ranger {
//     constructor(name, color, animalSpirit)
//     {
//         super("Kakeru Shishi", "Gao Red", "Lion");
//         this.weapon ="Lion Fang";
//     }
//  shout(){
// if (this.isTransformed){
//     console.log(`${this.color} : สิงห์หนุ่มผู้ร้อนแรง ${this.color}`)
// } else {
//     console.log(`${this.name} : needs to transform first!`);

//  }
// }
// }