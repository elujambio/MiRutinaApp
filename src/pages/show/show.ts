import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {ViewChild} from '@angular/core';
import { TimerComponent } from '../timer/timer';
/* import providers */
	import { Api } from '../../providers/api';
import { WorkoutdetailsPage } from '../workoutdetails/workoutdetails';


@Component({
  selector: 'show',
  templateUrl: 'show.html',
  providers: [Api]
})
export class ShowPage {
public user: any;
public workouts: any;
public created: any;


  @ViewChild(TimerComponent) timer: TimerComponent;


  appName = 'Ionic App';

  constructor(public navCtrl: NavController, public navParams: NavParams, public apiCtrl: Api) {
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
        delete this.workouts.created;
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
