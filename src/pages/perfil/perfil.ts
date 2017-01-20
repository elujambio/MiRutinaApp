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
	public gymid: any;

	constructor(public navTitle: NavbarTitle, public navCtrl: NavController, public navParams: NavParams, public apiCtrl: Api) {
		navTitle.setTitle("Mi Perfil");

		this.apiCtrl.get('http://gymapp-nuva.herokuapp.com/api/user')
		.then(data => {
			this.user = data;
      this.user.weight = this.user.weight / 1000 + "kg";
      this.user.height = this.user.height.charAt(0) + "." + this.user.height.charAt(1) + this.user.height.charAt(2);
		});
	}

	ionViewDidLoad() {

		this.user = this.navParams.get('user');
		this.gymid = this.navParams.get('gymId');
		this.apiCtrl.get('http://gymapp-nuva.herokuapp.com/api/gym/'+this.gymid)
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
