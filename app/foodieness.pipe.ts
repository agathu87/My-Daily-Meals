import { Pipe, PipeTransform } from '@angular/core';
import { Meal } from './meal.model';

@Pipe({
  name: 'foodieness',
  pure: false
})

export class FoodienessPipe implements PipeTransform{
  transform(input: Meal[], desiredFoodieness) {
    var output: Meal[] = [];
    if(desiredFoodieness === "low amount") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].amount < 500) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
