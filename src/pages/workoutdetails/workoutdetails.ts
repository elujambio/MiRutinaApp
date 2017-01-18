import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {ViewChild} from '@angular/core';
/* import providers */
	import { Api } from '../../providers/api';
	import { NavbarTitle } from "../../providers/navbar-title";

  import { TimerComponent } from '../timer/timer';

/*
  Generated class for the Workoutdetails page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-workoutdetails',
  templateUrl: 'workoutdetails.html',
  providers: [Api, NavbarTitle]
})
export class WorkoutdetailsPage {
public workouts: any;
public id_workout: any;
public exercises: any;
public exerciseid: any;
public name: any;

  @ViewChild(TimerComponent) timer: TimerComponent;

  constructor(public navTitle: NavbarTitle, public navCtrl: NavController, public navParams: NavParams, public apiCtrl: Api) {
	this.name = this.navParams.get('workoutName');
  navTitle.setTitle(this.name);
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad WorkoutdetailsPage');
		this.exerciseid = this.navParams.get('exerciseId');
		this.apiCtrl.get('http://gymapp-nuva.herokuapp.com/api/workout/'+this.exerciseid)
	    .then(data => {
	      this.exercises = data;
	    });

  }


startTimer(){
this.timer.startTimer();
}

started(){
return this.timer.hasStart();
}
finished(){
return this.timer.hasFinished();
}

status(){
return this.timer.getStatus();
}


pause(){
this.timer.pauseTimer();
}
resume(){
this.timer.resumeTimer();
}

}
