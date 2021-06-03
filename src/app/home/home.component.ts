import { Component } from "@angular/core";

@Component({
    selector: 'midoc-home',
    templateUrl: './home.component.html'
})
export class HomeComponent{
    title: string;

    constructor(){
        this.title = 'Home Title';
    }

    getDetails(){
        alert('get details');
    }
}