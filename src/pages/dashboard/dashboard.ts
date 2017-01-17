import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/* import providers */
	import { Api } from '../../providers/api';

	/* import providers */
		import { Data } from '../../providers/storage';

/* import related pages */
	import { OrganisationPage } from '../organisation/organisation';
	import { GymPage } from '../gym/gym';
	import { PerfilPage } from '../perfil/perfil';
	import { ShowPage } from '../show/show';
	import { ClasesPage } from '../clases/clases';
	import { EntrenadoresPage } from '../entrenadores/entrenadores';
	import { AparatosPage } from '../aparatos/aparatos';
	import { LogoutPage } from '../logout/logout';
	import { LoginPage } from '../login/login';

@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
  providers: [Api, Data]
})
export class DashboardPage {

	public user: any;

	constructor(public navCtrl: NavController, public navParams: NavParams, public apiCtrl: Api, public dataCtrl: Data) {
	this.user = this.navParams.get('user');
	}

	goTo(page) {
		if (page === 'organisation') this.navCtrl.push(OrganisationPage, { user: this.user });
		else if (page === 'gym') this.navCtrl.push(GymPage, { user: this.user });
		else if (page === 'perfil') this.navCtrl.push(PerfilPage, {user: this.user});
		else if (page === 'show') this.navCtrl.push(ShowPage, {user: this.user});
		else if (page === 'clases') this.navCtrl.push(ClasesPage, {user: this.user});
		else if (page === 'entrenadores') this.navCtrl.push(EntrenadoresPage, {user: this.user});
		else if (page === 'aparatos') this.navCtrl.push(AparatosPage, {user: this.user});
		else if (page === 'logout') this.navCtrl.push(LogoutPage, {user: this.user});
	}
	open(id, page){
	if (page === 'perfil') this.navCtrl.push(PerfilPage, {user: this.user, gymId: id});
	else if (page === 'aparatos') this.navCtrl.push(AparatosPage, {user: this.user, gymId: id});
	}

logout(){
//this.dataCtrl.remove('credentials');
this.navCtrl.push(LoginPage);
}


}
