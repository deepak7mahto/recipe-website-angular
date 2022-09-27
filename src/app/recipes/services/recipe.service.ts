import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { DatabaseService } from 'src/app/shared/database.service';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { Recipe } from '../../shared/recipes.model';

@Injectable()
export class RecipeService {
  recipeChanged = new Subject<Recipe[]>();

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

  constructor(private databaseService : DatabaseService) {}

  getRecipes() {
    this.databaseService.getRecipes().subscribe((recipes : Recipe[])=>{
      this.recipes = recipes;
      this.recipeChanged.next(this.recipes);
    });
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipeChanged.next(this.recipes.slice());
    this.databaseService.storeRecipe(this.recipes.slice());
  }

  updateRecipe(id: number, recipe: Recipe) {
    this.recipes[id] = recipe;
    this.recipeChanged.next(this.recipes.slice());
    this.databaseService.storeRecipe(this.recipes.slice());
  }

  deleteRecipe(id: number) {
    this.recipes.splice(id, 1);
    this.recipeChanged.next(this.recipes.slice());
    this.databaseService.storeRecipe(this.recipes.slice());
  }
}
