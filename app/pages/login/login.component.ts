import { Component } from "@angular/core";
import { User } from "../../shared/user/user";
import { Router } from "@angular/router";

@Component({
  selector: "my-app",
  templateUrl:'pages/login/login.html',
  styleUrls: ["pages/login/login.css"]
})

export class LoginComponent {
    user: User;

      constructor(private router: Router) {
        this.user = new User();
      }

    submit() {

      alert("radi! Evo ga username i password " + this.user.username + ' ' + this.user.password);

    }

    signUp() {
      
      this.router.navigate(["/register"])

    }

}
