import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meals-list',
  template: `

  `
})

export class MealsListComponent{
  @Input() childMealsList: Meal[];
  @Output() clickSender = new EventEmitter();
  editButtonHasBeenClicked(mealToEdit: Meal){
    console.log(mealToEdit);
    this.clickSender.emit(mealToEdit);
  }

  getTotal(){
    var total: number=0;
    for (var i=0; i<this.childMealsList.length;i++){
      var currentAmount: number = this.childMealsList[i].amount;
      total += currentAmount;
    }
    return total;
  }

  getAverage(){
    var average: number=0;
    var total = this.getTotal();
    average = total/this.childMealsList.length;
    return average;
  }
   public selectedFoodieness:string="all";
   onChange(optionFromMenu){
     this.selectedFoodieness = optionFromMenu;
   }
}
