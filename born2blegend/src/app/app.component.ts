import { Component } from '@angular/core';
// import * as anime from 'animejs';
// import anime from '../../node_modules/animejs/lib/animejs'
// import { default as anime } from '../../node_modules/animejs/lib/anime.es.js';
// import * from 'animejs';
// declare var anime: any;  

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'born2blegends';
  myScriptElement:any
  myScriptElement2:any
  constructor(){ 
    this.myScriptElement = document.createElement("script");
    this.myScriptElement2 = document.createElement("script");
    this.myScriptElement.src = "../assets/anime.min.js";
    this.myScriptElement2.src = "../assets/anime.js";
    document.body.appendChild(this.myScriptElement);
    document.body.appendChild(this.myScriptElement2);
 }
ngOnInit(): void {
 
}
ngAfterViewInit(): void {
 
}

}
