import {Recipe} from './recipe.modal';
import {EventEmitter} from '@angular/core';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>()
  private recipes: Recipe[] = [
    new Recipe('A Test Recipe',
      'This is a simple test', 'https://cdn2.tmbi.com/TOH/Images/Photos/37/300x300/exps25157_FM153592B03_18_12b.jpg')
    //the above content is written as per the constructor in recipe.modal.ts
  ];
  //in the above line the type of recipes is the array of Recipe modal
  //which tells ts that this variable will store Recipe objects, not string or number but object.

 getRecipes() {
  return this.recipes.slice();
}
}
