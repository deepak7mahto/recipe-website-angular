import { Component, OnInit } from '@angular/core';
import { Recipe } from '../shared/recipes.model';
import { RecipeService } from './services/recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe;

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.recipeService.selectedRecipeEmitter.subscribe((recipe) => {
      this.selectedRecipe = recipe;
    });
  }
}
