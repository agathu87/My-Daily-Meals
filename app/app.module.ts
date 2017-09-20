import { NgModule } from '@angular/core';
import { EditMealComponent } from './edit-meal.component';
import { AppComponent } from './app.component';
import { MealsListComponent } from './meals-list.component';
import { NewMealComponent } from './new-meal.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { FoodienessPipe } from './foodieness.pipe';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule

  ],
  declarations: [
    AppComponent,
    MealsListComponent,
    NewMealComponent,
    EditMealComponent,
    FoodienessPipe],
bootstrap: [ AppComponent ]
})

export class AppModule { }
