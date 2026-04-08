import GaoDarkWhite from "./gaodarkwhite.js";
import Rainbow from './Rainbow.js';
import Gaored from "./gaored.js";
import  Orange  from './Gaoorange.js';
import Ranger from "./Ranger.js";





const gaored = new Gaored("Kakeru Shishi", "Gao red", "Gao Lion");

gaored.transform();

gaored.shout();
gaored.aftertransform()
gaored.callAnimalSpirit();





/*
const quote = new Orange("ตุ๋ยดุ้ย", "Orange")

quote.shout();
*/



/*
const vanDarkFong = new GaoDarkWhite("vanDarkFong", "White", "Gao Phoenix");

vanDarkFong.shout();
vanDarkFong.callAnimalSpirit();

console.log("--- Transformation Time ---");

vanDarkFong.transform();
vanDarkFong.shout();
vanDarkFong.callAnimalSpirit();
*/





const Raven = new Rainbow("inwza007","Rainbow","Fatcat");


Raven.human()
Raven.DivineBeast()
Raven.callAnimalSpirit()
Raven.transform()
Raven.callAnimalSpirit()
Raven.aftertransform()
Raven.makeSound()

Ranger.teamUp(gaored,Raven)




