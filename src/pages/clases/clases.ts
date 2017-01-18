import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
/* import providers */
import { Api } from '../../providers/api';

import { LessonsdetailsPage } from '../lessonsdetails/lessonsdetails';

import { NavbarTitle } from "../../providers/navbar-title";

/*
  Generated class for the Clases page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-clases',
  templateUrl: 'clases.html',
    providers: [Api, NavbarTitle]
})
export class ClasesPage {
public user: any;
public lessons: any;
public name: any; 
public title: any = "Clases"; 
  constructor(public navTitle: NavbarTitle, public navCtrl: NavController, public navParams: NavParams, public apiCtrl: Api) {
    // title = "Clases"; 
    navTitle.setTitle("Clases");
  }
  ionViewDidLoad() {
    this.user = this.navParams.get('user');

    if (this.user) { // all is well
      this.apiCtrl.get('http://gymapp-nuva.herokuapp.com/api/lesson')
        .then(data => {
          this.lessons = data;
          this.lessons = this.lessons.gym;
        });

  }


  }


  goTo(id, gid, tid){
    this.navCtrl.push(LessonsdetailsPage, { idLesson: id , gymId: gid, teacherId: tid});
  }

}
