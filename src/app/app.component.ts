import { Component, ViewChild } from '@angular/core';
import { StatusBar, Splashscreen } from 'ionic-native';
import { GymPage } from '../pages/gym/gym';
import { PerfilPage } from '../pages/perfil/perfil';
import { ClasesPage } from '../pages/clases/clases';
import { EntrenadoresPage } from '../pages/entrenadores/entrenadores';
import { AparatosPage } from '../pages/aparatos/aparatos';
import { RutinasPage } from '../pages/rutinas/rutinas';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { MenuController } from 'ionic-angular';

import { Nav, Platform } from 'ionic-angular';
/* import root page pages */
  import { LoginPage } from '../pages/login/login';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
@ViewChild(Nav) nav: Nav;
public user: any;

  rootPage = LoginPage;

  constructor(platform: Platform, public menuCtrl: MenuController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }


  goTo(page) {
	  if (page === 'gym') {this.menuCtrl.close(); this.nav.push(GymPage, { user: this.user, title: "Gimnasio"  });}
    else if (page === 'dashboard') this.nav.push(DashboardPage, {user: this.user, title: "Perfil" });
		else if (page === 'perfil') this.nav.push(PerfilPage, {user: this.user, title: "Perfil" });
		else if (page === 'clases') this.nav.push(ClasesPage, {user: this.user, title: "Clases" });
		else if (page === 'entrenadores') this.nav.push(EntrenadoresPage, {user: this.user, title: "Entrenadores" });
		else if (page === 'aparatos') this.nav.push(AparatosPage, {user: this.user, title: "Aparatos" });
		else if (page === 'rutinas') {this.menuCtrl.close(); this.nav.push(RutinasPage, {user: this.user});}
	}
	open(id, page){
	if (page === 'perfil'){ this.menuCtrl.close(); this.nav.push(PerfilPage, {user: this.user, gymId: id});}
	else if (page === 'aparatos') this.nav.push(AparatosPage, {user: this.user, gymId: id});
	else if (page === 'entrenadores') {this.menuCtrl.close(); this.nav.push(EntrenadoresPage, {user: this.user, gymId: id});}
	}

}
