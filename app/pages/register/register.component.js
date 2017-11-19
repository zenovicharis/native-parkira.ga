"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var newUser_1 = require("../../shared/user/newUser");
var RegisterComponent = (function () {
    function RegisterComponent(router) {
        this.router = router;
        this.user = new newUser_1.NewUser();
    }
    RegisterComponent.prototype.register = function () {
        alert("novi korisnik " + this.user.email + this.user.username + this.user.password);
        this.router.navigate(["/"]);
    };
    RegisterComponent = __decorate([
        core_1.Component({
            selector: "register",
            templateUrl: "pages/register/register.html",
            styleUrls: ["pages/register/register.css"]
        }),
        __metadata("design:paramtypes", [router_1.Router])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVnaXN0ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBQzFDLDBDQUF5QztBQUN6QyxxREFBb0Q7QUFTcEQ7SUFJVSwyQkFBb0IsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDaEMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLGlCQUFPLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBRUQsb0NBQVEsR0FBUjtRQUVNLEtBQUssQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3BGLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQTtJQUVqQyxDQUFDO0lBYkUsaUJBQWlCO1FBTjdCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUMsVUFBVTtZQUNuQixXQUFXLEVBQUMsOEJBQThCO1lBQzFDLFNBQVMsRUFBQyxDQUFDLDZCQUE2QixDQUFDO1NBQzVDLENBQUM7eUNBTW9DLGVBQU07T0FKL0IsaUJBQWlCLENBZTdCO0lBQUQsd0JBQUM7Q0FBQSxBQWZELElBZUM7QUFmWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IE5ld1VzZXIgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3VzZXIvbmV3VXNlclwiO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6XCJyZWdpc3RlclwiLFxyXG4gICAgdGVtcGxhdGVVcmw6XCJwYWdlcy9yZWdpc3Rlci9yZWdpc3Rlci5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6W1wicGFnZXMvcmVnaXN0ZXIvcmVnaXN0ZXIuY3NzXCJdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgUmVnaXN0ZXJDb21wb25lbnQgeyBcclxuXHJcbiAgICB1c2VyOiBOZXdVc2VyO1xyXG4gICAgXHJcbiAgICAgICAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMudXNlciA9IG5ldyBOZXdVc2VyKCk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgcmVnaXN0ZXIoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgYWxlcnQoXCJub3ZpIGtvcmlzbmlrIFwiICsgdGhpcy51c2VyLmVtYWlsICsgdGhpcy51c2VyLnVzZXJuYW1lICsgdGhpcy51c2VyLnBhc3N3b3JkKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9cIl0pXHJcblxyXG4gICAgICAgICAgfVxyXG5cclxufVxyXG4iXX0=