import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/* import providers */
import { Api } from '../../providers/api';

/* improt related pages */
import { AddGymPage } from '../add-gym/add-gym';
import { NavbarTitle } from "../../providers/navbar-title";

@Component({
  selector: 'page-gym',
  templateUrl: 'perfil.html',
  providers: [Api, NavbarTitle]
})
export class PerfilPage {
	public user: any;
	public gyms: any;
	// public t
	constructor(public navTitle: NavbarTitle, public navCtrl: NavController, public navParams: NavParams, public apiCtrl: Api) {
		navTitle.setTitle("Mi Perfil");
		this.apiCtrl.get('http://gymapp-nuva.herokuapp.com/api/user')
		.then(data => {
			this.user = data;
			console.log(this.user);
		});
	}s

	ionViewDidLoad() {

		this.user = this.navParams.get('user');

		if (this.user) { // all is well
			this.apiCtrl.get('http://gymapp-nuva.herokuapp.com/api/gym')
				.then(data => {
					this.gyms = data;
				});
		}

		// something is fishy

	}



	addGym() {
		this.navCtrl.push(AddGymPage, { user: this.user });
	}

}
