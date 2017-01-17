import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular';
import { NavTitleController } from '../components/nav-title/nav-title';
import { NavbarTitle } from "../../providers/navbar-title";

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

  section_image: string;
  title: string; 

  constructor(public navTitle: NavbarTitle, public viewCtrl: ViewController, public navCtrl: NavController, public navParams: NavParams) {
    this.title = navTitle.getTitle();
  }
  update() {
    this.title = this.navTitle.getTitle();

  } 
  goBack() {
    this.navCtrl.pop();
  }

}
