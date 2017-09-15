import { Component, Input, OUtput, EventEmitter} from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'edit-meal',
  template: `
<div *ngIf = "childSelectedMeal">
<h1>Edit My Meal</h1>
<div class = "form-group">
<input placeholder = "What's My Meal?" [(ngModel)] = "childSelectedMeal.name">
</div>

<div class = "form-group">
<input placeholder = "Describe My Meal" [(ngModel)] = "childSelectedMeal.details">
</div>

<div class = "form-group">
<input type = "number" placeholder = "What's The Amount?" [(ngModel)] = "childSelectedMeal.amount">
<button class = "btn btn-success" (click) = "doneClicked()">Done</button>
</div>

</div>

`
})
