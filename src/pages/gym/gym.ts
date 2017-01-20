import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/* import providers */
import { Api } from '../../providers/api';

/* improt related pages */
import { AddGymPage } from '../add-gym/add-gym';
import { NavbarTitle } from "../../providers/navbar-title";

@Component({
  selector: 'page-gym',
  templateUrl: 'gym.html',
  providers: [Api, NavbarTitle]
})
export class GymPage {
	public user: any;
	public gyms: any;
	public title: any;
	constructor(public navTitle: NavbarTitle, public navCtrl: NavController, public navParams: NavParams, public apiCtrl: Api) {
	    navTitle.setTitle("Gimnasio");
	}

	ionViewDidLoad() {

		this.user = this.navParams.get('user');

			this.apiCtrl.get('http://gymapp-nuva.herokuapp.com/api/gym')
				.then(data => {
					this.gyms = data;
				});


		// something is fishy

	}

	addGym() {
		this.navCtrl.push(AddGymPage, { user: this.user });
	}

  addSource(img){
  let image = "https://s3-us-west-1.amazonaws.com/mirutina/" + img;
  return image;
  }

}
