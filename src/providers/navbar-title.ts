import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the NavbarTitle provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class NavbarTitle {
  public nav_title: any; 
  constructor(public http: Http) {
    console.log('NavbarTitle Provider');
    
  }
  setTitle(title){
  	this.nav_title = title; 

    console.log("title");
    console.log(this.nav_title);
  }
  getTitle(){
  	return this.nav_title; 
  }
}
