import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NavbarTitle } from "../../providers/navbar-title";

/* import providers */
import { Api } from '../../providers/api';

/*
  Generated class for the Challengedetails page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-challengedetails',
  templateUrl: 'challengedetails.html',
  providers: [Api, NavbarTitle]
})
export class ChallengedetailsPage {
public id: any;
public title: any;
public details: any;

  constructor(public navTitle: NavbarTitle, public navCtrl: NavController, public navParams: NavParams, public apiCtrl: Api) {
  this.title = this.navParams.get('nameChallenge');
  navTitle.setTitle(this.title);
  }

  ionViewDidLoad() {
    this.id = this.navParams.get('idChallenge');
    this.apiCtrl.get('http://gymapp-nuva.herokuapp.com/api/challenge/'+this.id)
      .then(data => {
        this.details = data;
      });
  }

}
