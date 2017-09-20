"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var MealsListComponent = /** @class */ (function () {
    function MealsListComponent() {
        this.clickSender = new core_1.EventEmitter();
        this.selectedFoodieness = "all";
    }
    MealsListComponent.prototype.editButtonHasBeenClicked = function (mealToEdit) {
        console.log(mealToEdit);
        this.clickSender.emit(mealToEdit);
    };
    MealsListComponent.prototype.getTotal = function () {
        var total = 0;
        for (var i = 0; i < this.childMealsList.length; i++) {
            var currentAmount = this.childMealsList[i].amount;
            total += currentAmount;
        }
        return total;
    };
    MealsListComponent.prototype.getAverage = function () {
        var average = 0;
        var total = this.getTotal();
        average = total / this.childMealsList.length;
        return average;
    };
    MealsListComponent.prototype.onChange = function (optionFromMenu) {
        this.selectedFoodieness = optionFromMenu;
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], MealsListComponent.prototype, "childMealsList", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], MealsListComponent.prototype, "clickSender", void 0);
    MealsListComponent = __decorate([
        core_1.Component({
            selector: 'meals-list',
            template: "\n\n  "
        })
    ], MealsListComponent);
    return MealsListComponent;
}());
exports.MealsListComponent = MealsListComponent;
//# sourceMappingURL=meals-list.component.js.map