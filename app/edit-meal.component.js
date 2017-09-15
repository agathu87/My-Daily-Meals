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
var meal_model_1 = require("./meal.model");
var EditMealComponent = /** @class */ (function () {
    function EditMealComponent() {
        this.doneClickedSender = new core_1.EventEmitter();
    }
    EditMealComponent.prototype.doneClicked = function () {
        this.doneClickedSender.emit();
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", meal_model_1.Meal)
    ], EditMealComponent.prototype, "childSelectedMeal", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], EditMealComponent.prototype, "doneClickedSender", void 0);
    EditMealComponent = __decorate([
        core_1.Component({
            selector: 'edit-meal',
            template: "\n<div *ngIf = \"childSelectedMeal\">\n<h1>Edit My Meal</h1>\n<div class = \"form-group\">\n<input placeholder = \"What's My Meal?\" [(ngModel)] = \"childSelectedMeal.name\">\n</div>\n\n<div class = \"form-group\">\n<input placeholder = \"Describe My Meal\" [(ngModel)] = \"childSelectedMeal.details\">\n</div>\n\n<div class = \"form-group\">\n<input type = \"number\" placeholder = \"What's The Amount?\" [(ngModel)] = \"childSelectedMeal.amount\">\n<button class = \"btn btn-success\" (click) = \"doneClicked()\">Done</button>\n</div>\n\n</div>\n\n"
        })
    ], EditMealComponent);
    return EditMealComponent;
}());
exports.EditMealComponent = EditMealComponent;
//# sourceMappingURL=edit-meal.component.js.map