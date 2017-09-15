"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var meal_model_1 = require("./meal.model");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.masterMealList = [
            new meal_model_1.Meal("Chapo Ndengu", "Io ndengu iliweza", 600),
            new meal_model_1.Meal("Ugali Sukuma", "Wagwan Wagwan!", 400),
            new meal_model_1.Meal("Mukimo", "Kalicome through", 500),
            new meal_model_1.Meal("Mchele Madondo", "Ilibidi niongeze kachapo", 700)
        ];
        this.selectedMeal = null;
    }
    AppComponent.prototype.showDetails = function (clickedMeal) {
        this.selectedMeal = clickedMeal;
    };
    AppComponent.prototype.finishedEditing = function () {
        this.selectedMeal = null;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'kwa-mathe',
            template: "\n\n"
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map