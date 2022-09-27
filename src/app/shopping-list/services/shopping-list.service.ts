import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Injectable()
export class ShoppingListService {
  private ingredients: Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('Mango', 5),
  ];

  ingredientsEmitter = new Subject<Ingredient[]>();

  startEditingItem = new Subject<number>();

  getIngredients() {
    return this.ingredients.slice();
  }

  getIngredient(index: number) {
    return this.ingredients[index];
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsEmitter.next(this.ingredients);
  }

  updateIngredient(index: number, ingredient: Ingredient) {
    this.ingredients[index] = ingredient;
    this.ingredientsEmitter.next(this.ingredients);
  }

  deleteIngredient(index : number){
    this.ingredients.splice(index, 1);
    this.ingredientsEmitter.next(this.ingredients)
  }
}
