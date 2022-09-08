import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'born2blegends';
  myScriptElement:any
  constructor(){

    this.myScriptElement = document.createElement("script");
    this.myScriptElement.src = "../assets/anime.js";
    document.body.appendChild(this.myScriptElement);

 }
}
