import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
/* import providers */
	import { Api } from '../../providers/api';

  import { LessonsdetailsPage } from '../lessonsdetails/lessonsdetails';


/*
  Generated class for the Clases page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-clases',
  templateUrl: 'clases.html',
    providers: [Api]
})
export class ClasesPage {
public user: any;
public lessons: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public apiCtrl: Api) {}

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

  goTo(){
  this.navCtrl.push(LessonsdetailsPage, { user: this.user });
  }

}
