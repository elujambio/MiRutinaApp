import { Component } from '@angular/core';

/*
  Generated class for the BackButton component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'back-button',
  templateUrl: 'back-button.html'
})
export class BackButtonComponent {

  text: string;

  constructor() {
    console.log('Hello BackButton Component');
    this.text = 'Hello World';
  }

}
