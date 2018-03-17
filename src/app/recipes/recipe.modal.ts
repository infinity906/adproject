//a modal is a typescript file which defines how each component looks like
//so that whenever use recepi, it remains constant. it is basically a blueprint


import {Ingredient} from '../shared/ingredient.modal';

export class Recipe {
 public name: string;
 public description: string;
 public imagePath: string;
 public ingredients: Ingredient[];

 constructor(name: string, desc: string, imagePath: string, ingredients: Ingredient[]) {
   this.name = name;
   this.description = desc;
   this.imagePath = imagePath;
   this.ingredients = ingredients
 }
}
