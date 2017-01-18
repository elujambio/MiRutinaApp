import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
/* import providers */
import { Api } from '../../providers/api';
import { WorkoutdetailsPage } from '../workoutdetails/workoutdetails';
import { NavbarTitle } from "../../providers/navbar-title";


@Component({
  selector: 'show',
  templateUrl: 'show.html',
  providers: [Api, NavbarTitle]
})
export class ShowPage {
public user: any;
public workouts: any;
public created: any;
public title  = "Mi Rutina";




  appName = 'Ionic App';

  constructor(public navTitle: NavbarTitle, public navCtrl: NavController, public navParams: NavParams, public apiCtrl: Api) {

    navTitle.setTitle("Mi Rutina");

  }

	ionViewDidLoad() {
  this.user = this.navParams.get('user');

  if (this.user) { // all is well
    this.apiCtrl.get('http://gymapp-nuva.herokuapp.com/api/workout')
      .then(data => {
        this.workouts = data;
      });

  }
}

goTo(exid){
this.navCtrl.push(WorkoutdetailsPage, { exerciseId: exid });
}


}
