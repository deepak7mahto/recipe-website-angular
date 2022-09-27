import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './services/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[] = [];
  shoppingListSubsscription: Subscription;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();

    this.shoppingListSubsscription =
      this.shoppingListService.ingredientsEmitter.subscribe((ingredients) => {
        this.ingredients = ingredients;
      });
  }

  ngOnDestroy(): void {
    this.shoppingListSubsscription.unsubscribe();
  }

  onEditItem(index: number) {
    this.shoppingListService.startEditingItem.next(index);
  }
}
