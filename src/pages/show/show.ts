import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { TimerComponent } from '../timer/timer';
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

  @ViewChild(TimerComponent) timer: TimerComponent;


  appName = 'Ionic App';

  constructor(public navTitle: NavbarTitle, public navCtrl: NavController, public navParams: NavParams, public apiCtrl: Api) {

    navTitle.setTitle("Mi Rutina");

    this.apiCtrl.get('http://gymapp-nuva.herokuapp.com/api/user')
    .then(data => {
      this.user = data;
      console.log(this.user);
    });

  }

	ionViewDidLoad() {
  this.user = this.navParams.get('user');



  if (this.user) { // all is well
    this.apiCtrl.get('http://gymapp-nuva.herokuapp.com/api/workout')
      .then(data => {
        this.workouts = data;
        // delete this.workouts.created;
        console.log(this.workouts)
      });

  }
}

goTo(exid){
this.navCtrl.push(WorkoutdetailsPage, { exerciseId: exid });
}

  ngOnInit() {
    setTimeout(() => {
      this.timer.startTimer();
    }, 1000)
  }

}
