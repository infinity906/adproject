//a modal is a typescript file which defines how each component looks like
//so that whenever use recepi, it remains constant. it is basically a blueprint


export class Recipe {
 public name: string;
 public description: string;
 public imagePath: string;

 constructor(name: string, desc: string, imagePath: string) {
   this.name = name;
   this.description = desc;
   this.imagePath = imagePath;
 }
}
