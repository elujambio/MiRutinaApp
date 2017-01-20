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
  public first: any;
  public last: any;






	constructor(public navTitle: NavbarTitle, public navCtrl: NavController, public navParams: NavParams, public apiCtrl: Api) {
		navTitle.setTitle("Mi Perfil");
    this.apiCtrl.get('http://gymapp-nuva.herokuapp.com/api/user')
  	.then(data => {
  		this.user = data;

      this.user.weight = this.user.weight / 1000 + "kg";
      this.user.height = this.user.height.charAt(0) + "." + this.user.height.charAt(1) + this.user.height.charAt(2);

      let month = "";
      let date = this.user.created_at.charAt(5)+this.user.created_at.charAt(6);
      if(date === "01"){month="Enero";}
      else if(date === "02"){month="Febrero";}
      else if(date === "03"){month="Marzo";}
      else if(date === "04"){month="Abril";}
      else if(date === "05"){month="Mayo";}
      else if(date === "06"){month="Junio";}
      else if(date === "07"){month="Julio";}
      else if(date === "08"){month="Agosto";}
      else if(date === "09"){month="Septiembre";}
      else if(date === "10"){month="Octubre";}
      else if(date === "11"){month="Noviembre";}
      else if(date === "12"){month="Diciembre";}
      this.user.created_at = this.user.created_at.charAt(8)+this.user.created_at.charAt(9) + " de "+month + " del "+this.user.created_at.charAt(0)+this.user.created_at.charAt(1)+this.user.created_at.charAt(2)+this.user.created_at.charAt(3);

      month = "";
      date = this.user.updated_at.charAt(5)+this.user.updated_at.charAt(6);
      if(date === "01"){month="Enero";}
      else if(date === "02"){month="Febrero";}
      else if(date === "03"){month="Marzo";}
      else if(date === "04"){month="Abril";}
      else if(date === "05"){month="Mayo";}
      else if(date === "06"){month="Junio";}
      else if(date === "07"){month="Julio";}
      else if(date === "08"){month="Agosto";}
      else if(date === "09"){month="Septiembre";}
      else if(date === "10"){month="Octubre";}
      else if(date === "11"){month="Noviembre";}
      else if(date === "12"){month="Diciembre";}
      this.user.updated_at = this.user.updated_at.charAt(8)+this.user.updated_at.charAt(9) + " de "+month + " del "+this.user.updated_at.charAt(0)+this.user.updated_at.charAt(1)+this.user.updated_at.charAt(2)+this.user.updated_at.charAt(3);

  		});
	}


	ionViewDidLoad() {

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
