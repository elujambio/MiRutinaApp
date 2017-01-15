import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/* import providers */
	import { Api } from '../../providers/api';

/* import related pages */

@Component({
  selector: 'page-add-gym',
  templateUrl: 'add-gym.html',
  providers: [Api]
})
export class AddGymPage {
	name;
	address;
	opens;
	closes;
	lat;
	lng;

	constructor(public navCtrl: NavController, public navParams: NavParams, public apiCtrl: Api) {}

	ionViewDidLoad() {

	}

	createGym() {
		
		let newGym = {
			name: this.name,
			address: this.address,
			opens: this.opens,
			closes: this.closes,
			lat: this.lat,
			lng: this.lng
		}

		console.log(newGym);

	}

}
