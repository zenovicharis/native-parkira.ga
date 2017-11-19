import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { NewUser } from "../../shared/user/newUser";


@Component({
    selector:"register",
    templateUrl:"pages/register/register.html",
    styleUrls:["pages/register/register.css"]
})

export class RegisterComponent { 

    user: NewUser;
    
          constructor(private router: Router) {
            this.user = new NewUser();
          }

          register() {

                alert("novi korisnik " + this.user.email + this.user.username + this.user.password);
                this.router.navigate(["/"])

          }

}
