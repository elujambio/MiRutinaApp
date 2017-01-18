import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NavbarTitle } from "../../providers/navbar-title";
import { TrainerdetailsPage } from '../trainerdetails/trainerdetails';
/* import providers */
	import { Api } from '../../providers/api';

/*
  Generated class for the Entrenadores page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-entrenadores',
  templateUrl: 'entrenadores.html',
  providers: [Api, NavbarTitle]
})
export class EntrenadoresPage {
public trainers: any;
public id: any;


  constructor(public navTitle: NavbarTitle, public navCtrl: NavController, public navParams: NavParams, public apiCtrl: Api) {
  navTitle.setTitle('Entrenadores');
  }

  ionViewDidLoad() {

  this.id = this.navParams.get('gymId');
  this.apiCtrl.get('http://gymapp-nuva.herokuapp.com/api/gym/'+this.id+'/user')
    .then(data => {
      this.trainers = data;
    });
  }

goTo(id, name, gymid){
this.navCtrl.push(TrainerdetailsPage, {trainerId: id, trainerName: name, gymId: gymid});
}

}
