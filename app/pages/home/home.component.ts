import { Component } from "@angular/core";
import { Router } from "@angular/router";



@Component({
    selector:"home",
    templateUrl:"pages/home/home.html",
    styleUrls:["pages/home/home.css"]
})

export class HomeComponent { 

          constructor(private router: Router) {}     

}
