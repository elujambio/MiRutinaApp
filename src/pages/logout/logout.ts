import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

	import { DashboardPage } from '../dashboard/dashboard';
	import { LoginPage } from '../login/login';



	/* import providers */
		import { Data } from '../../providers/storage';

/*
  Generated class for the Logout page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-logout',
  templateUrl: 'logout.html',
  providers: [Data]
})
export class LogoutPage {
public user: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public dataCtrl: Data) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LogoutPage');
  }

  changeBearer(role){

  }

  goBack(page){
  if (page === 'dashboard') this.navCtrl.push(DashboardPage, { user: this.user });

  }

}
