import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular';

/*
  Generated class for the NavHeader component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'nav-header',
  templateUrl: 'nav-header.html'
})
export class NavHeaderComponent {

  current_title: any; 
  section_image: string;

  constructor(public viewCtrl: ViewController, public navCtrl: NavController, public navParams: NavParams) {
    console.log(navCtrl);
    this.current_title = navCtrl.getActiveChildNav();
  }
  // update() 
  goBack() {
    this.navCtrl.pop();
  }
}
