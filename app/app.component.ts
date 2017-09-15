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
    new Meal("Chapo Ndengu", "Io ndengu iliweza", 70),
    new Meal("Ugali Sukuma", "Wagwan Wagwan!", 70),
    new Meal("Mukimo", "Kalicome through", 80),
    new Meal("Mchele Madondo", "Ilibidi niongeze kachapo", 60)
  ];

  selectedMeal: Meal = null;
  showDetails(clickedMeal: Meal) {
    this.selectedMeal = clickedMeal;
  }
}
