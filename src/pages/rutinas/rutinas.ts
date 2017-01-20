import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
/* import providers */
import { Api } from '../../providers/api';
import { WorkoutdetailsPage } from '../workoutdetails/workoutdetails';
import { NavbarTitle } from "../../providers/navbar-title";


@Component({
  selector: 'page-rutinas',
  templateUrl: 'rutinas.html',
  providers: [Api, NavbarTitle]
})
export class RutinasPage {
public user: any;
public workouts: any;
public created: any;
public title  = "Mi Rutina";


  constructor(public navTitle: NavbarTitle, public navCtrl: NavController, public navParams: NavParams, public apiCtrl: Api) {

    navTitle.setTitle("Mi Rutina");

  }

	ionViewDidLoad() {
  console.log("Hola");
  this.user = this.navParams.get('user');

    this.apiCtrl.get('http://gymapp-nuva.herokuapp.com/api/workout')
      .then(data => {
        this.workouts = data;
      });

}

goTo(exid, name){
this.navCtrl.push(WorkoutdetailsPage, { exerciseId: exid, workoutName: name });
}

}
