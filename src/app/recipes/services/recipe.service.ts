import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { Recipe } from '../../shared/recipes.model';

@Injectable()
export class RecipeService {
  selectedRecipeEmitter = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Tasty Recipe 1',
      'Tasty Recipe delicious',
      'https://image.shutterstock.com/image-vector/caprese-salad-recipe-step-by-260nw-1201271428.jpg',
      [new Ingredient('Bread', 1), new Ingredient('SUgar', 4)]
    ),
    new Recipe(
      'My Recipe is Very Tasty',
      'Very Delicious Recipe',
      'https://image.shutterstock.com/image-vector/caprese-salad-recipe-step-by-260nw-1201271428.jpg',
      [new Ingredient('Potato', 1), new Ingredient('Tomato', 5)]
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }
}
