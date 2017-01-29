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
public last_actionable: any; 
public current_actionable: any; 
  rootPage = LoginPage;

  constructor(platform: Platform, public menuCtrl: MenuController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }


  find_ancestor(element, ancestor_class) {

      if (!element.classList.contains(ancestor_class)) {
        while ((element = element.parentElement) && !element.classList.contains(ancestor_class));
        if (element == null) {
          console.log("element is null"); 
        }
      }
      console.log(element);
      return element;
  }

  actionable_touchstart($event) {

    this.current_actionable = this.find_ancestor($event.target, "actionable-t1");
    console.log("this.current_actionable");
    console.log(this.current_actionable);
    if(this.current_actionable != null && this.current_actionable != undefined) {
      this.current_actionable.className += " actTstart1"; 
      this.last_actionable = this.current_actionable;
    }

  }
  actionable_touchend($event) {
    // console.log($event.target); 
    // $event.target.className = $event.target.className.replace("act_tstart_1", "");  
    console.log("this.last_actionable"); 
    console.log(this.last_actionable); 

    this.last_actionable.className.replace("actTstart1", "");
    console.log(this.last_actionable.className);
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
