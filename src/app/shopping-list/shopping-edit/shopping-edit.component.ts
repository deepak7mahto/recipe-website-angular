import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../services/shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {}

  onAddClick(inputName: HTMLInputElement, inputAmount: HTMLInputElement) {
    this.shoppingListService.addIngredient(
      new Ingredient(inputName.value, parseInt(inputAmount.value))
    );
  }
}
