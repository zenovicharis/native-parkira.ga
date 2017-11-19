import { Component } from "@angular/core";
import { User } from "./shared/user/user";

@Component({
  selector: "my-app",
  templateUrl:'pages/login/login.html',
  styleUrls: ["pages/login/login.css"]
})

export class AppComponent {
    user: User;

      constructor() {
        this.user = new User();
      }

    submit() {

      alert("radi! Evo ga username i password " + this.user.username + ' ' + this.user.password);

    }

}
