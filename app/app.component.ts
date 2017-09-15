import { Component } from '@angular/core';
import { Meal } from './meal.model';


@Component ({
selector: 'kwa-mathe',
template: `

`
  })


export class AppComponent {
  public masterMealList: Meal[] =
  [
    new Meal("Chapo Ndengu", "Io ndengu iliweza", 600),
    new Meal("Ugali Sukuma", "Wagwan Wagwan!", 400),
    new Meal("Mukimo", "Kalicome through", 500),
    new Meal("Mchele Madondo", "Ilibidi niongeze kachapo", 700)
  ];

  selectedMeal: Meal = null;
  showDetails(clickedMeal: Meal) {
    this.selectedMeal = clickedMeal;
  }

  finishedEditing() {
    this.selectedMeal = null;
  }

}
