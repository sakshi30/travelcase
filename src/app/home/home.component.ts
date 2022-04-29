import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({ templateUrl: 'home.component.html' })
export class HomeComponent {
   
    constructor(private router: Router){}
    goToPage(page){
        this.router.navigate([page])
    }
}