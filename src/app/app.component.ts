import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // template : `<h1>{{title}}</h1>`
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'Angular5';
  // imageUrl = 'assets/images/angular.jpg'
  constructor() {
    console.log("AppComponent constructor called");
  }

  ngOnInit() {
    console.log("AppComponent ngOnInit called");
  }

  ngOnDestroy() {
    console.log("AppComponent ngOnDestroy called");
  }
//   myHandler(evt) {
//     alert("버튼클릭..." + evt.target.textContent)
//   }
}
