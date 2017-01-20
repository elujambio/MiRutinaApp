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
public open: number;
public e_d: number;
public state: any;
public no_sets: any;
public no_exercises: any;
public ex_aux: any;

  @ViewChild(TimerComponent) timer: TimerComponent;

  constructor(public navTitle: NavbarTitle, public navCtrl: NavController, public navParams: NavParams, public apiCtrl: Api) {
	this.name = this.navParams.get('workoutName');
  navTitle.setTitle(this.name);
	this.state = false;
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad WorkoutdetailsPage');
		this.exerciseid = this.navParams.get('exerciseId');
		this.apiCtrl.get('http://gymapp-nuva.herokuapp.com/api/workout/'+this.exerciseid)
	    .then(data => {
	      this.exercises = data;

	    });

  }

toggleDetails(newValue: any) {
  if (this.open === newValue) {
    this.open = -1;
  }
  else {
    this.open = newValue;
  }
}

size(count){
count++;

}

tryopen(value){
 if(value){this.state = false;}
 else{this.state = true;}
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
