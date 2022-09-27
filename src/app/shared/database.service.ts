import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipe } from './recipes.model';

@Injectable({ providedIn: 'root' })
export class DatabaseService {
  url =
    '';

  constructor(private httpClient: HttpClient) {}

  storeRecipe(recipes: Recipe[]) {
    this.httpClient.put(this.url + '/recipes.json', recipes).subscribe(() => {
      console.log('Recipes Stored');
    });
  }

  getRecipes(){
    return this.httpClient.get<Recipe[]>(this.url+'/recipes.json');
  }
}
