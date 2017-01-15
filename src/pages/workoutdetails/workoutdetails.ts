import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {ViewChild} from '@angular/core';
/* import providers */
	import { Api } from '../../providers/api';

  import { TimerComponent } from '../timer/timer';

/*
  Generated class for the Workoutdetails page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-workoutdetails',
  templateUrl: 'workoutdetails.html',
  providers: [Api]
})
export class WorkoutdetailsPage {
public workouts: any;
public id_workout: any;
public exercises: any;

  @ViewChild(TimerComponent) timer: TimerComponent;

  constructor(public navCtrl: NavController, public navParams: NavParams, public apiCtrl: Api) {
  this.apiCtrl.get('http://gymapp-nuva.herokuapp.com/api/workout/2')
    .then(data => {
      this.exercises = data;
    });
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad WorkoutdetailsPage');

  }

  ngOnInit() {
    setTimeout(() => {
      this.timer.startTimer();
    }, 1000)
  }

}
