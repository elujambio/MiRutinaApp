import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NavbarTitle } from "../../providers/navbar-title";

/* import providers */
import { Api } from '../../providers/api';

/*
  Generated class for the Trainerdetails page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-trainerdetails',
  templateUrl: 'trainerdetails.html',
   providers: [Api, NavbarTitle]
})
export class TrainerdetailsPage {
public name: any;
public trainer_id: any;
public gym_id: any;
public details: any;

  constructor(public navTitle: NavbarTitle, public navCtrl: NavController, public navParams: NavParams, public apiCtrl: Api) {
  this.name = this.navParams.get('trainerName');
  navTitle.setTitle("Hola");
  }

  ionViewDidLoad() {
    this.trainer_id = this.navParams.get('trainerId');
    this.gym_id = this.navParams.get('gymId');


    this.apiCtrl.get('http://gymapp-nuva.herokuapp.com/api/gym/'+this.gym_id+'/user/'+this.trainer_id)
      .then(data => {
        this.details = data;
      });

  }

}
