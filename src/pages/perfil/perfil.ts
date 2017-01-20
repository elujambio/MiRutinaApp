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

  getDate(d){
  let month = "";
  let date = d.charAt(5)+d.charAt(6);
  if(date === "1"){month="Enero";}
  else if(date === "2"){month="Febrero";}
  else if(date === "3"){month="Marzo";}
  else if(date === "4"){month="Abril";}
  else if(date === "5"){month="Mayo";}
  else if(date === "6"){month="Junio";}
  else if(date === "7"){month="Julio";}
  else if(date === "8"){month="Agosto";}
  else if(date === "9"){month="Septiembre";}
  else if(date === "10"){month="Octubre";}
  else if(date === "11"){month="Noviembre";}
  else if(date === "12"){month="Diciembre";}
  month+= ", "+d.charAt(8)+d.charAt(9);
  console.log(month);
  }

	addGym() {
		this.navCtrl.push(AddGymPage, { user: this.user });
	}

  addSource(img){
  let image = "https://s3-us-west-1.amazonaws.com/mirutina/" + img;
  return image;
  }

}
