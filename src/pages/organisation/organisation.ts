import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NavbarTitle } from "../../providers/navbar-title";
import { ChallengedetailsPage } from '../challengedetails/challengedetails';

/* import providers */
import { Api } from '../../providers/api';

/*
  Generated class for the Organisation page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-organisation',
  templateUrl: 'organisation.html',
  providers: [Api, NavbarTitle]
})
export class OrganisationPage {
public challenges: any;

  constructor(public navTitle: NavbarTitle, public navCtrl: NavController, public navParams: NavParams, public apiCtrl: Api) {
  navTitle.setTitle("Retos");
  }

  ionViewDidLoad() {
  this.apiCtrl.get('http://gymapp-nuva.herokuapp.com/api/challenge')
    .then(data => {
      this.challenges = data;
    });

  }

  goTo(id, name){
   this.navCtrl.push(ChallengedetailsPage, { idChallenge: id, nameChallenge: name });
  }

}
