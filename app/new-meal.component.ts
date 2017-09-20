import { Component, Output, EventEmitter } from '@angular.core';
import { Meal } from './meal.model';

@Component({
  selector: 'new-meal',
  template: `

  `
})

export class NewMealComponent {
  @Output() newMealSender = new EventEmitter();
  addClicked( name:string, description:string, amount:number){
    var newMealToAdd: Meal = new Meal( name, description, amount );
    this.newMealSender.emit(newMealToAdd);
  }
}
