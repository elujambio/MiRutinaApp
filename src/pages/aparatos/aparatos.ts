import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
/* import providers */
	import { Api } from '../../providers/api';
/*
  Generated class for the Aparatos page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-aparatos',
  templateUrl: 'aparatos.html',
  providers: [Api]
})
export class AparatosPage {
public gymid: any;
public equipments: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public apiCtrl: Api) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad AparatosPage');
    this.gymid = this.navParams.get('gymId');
    this.apiCtrl.get('http://gymapp-nuva.herokuapp.com/api/gym/'+this.gymid+'/equipment')
      .then(data => {
        this.equipments = data;
      });
  }



}
