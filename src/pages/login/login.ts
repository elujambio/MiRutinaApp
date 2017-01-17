import { Component, ElementRef } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

/* import providers */
	import { Data } from '../../providers/storage';

import { Storage } from '@ionic/storage';

	/* import providers */
		import { Api } from '../../providers/api';

/* import linked pages */
	import { DashboardPage } from '../dashboard/dashboard';

@Component({
	selector: 'page-login',
	templateUrl: 'login.html',
	providers: [Data, Api]
})
export class LoginPage {

	public credentials: any;
	public usr: any;
	public pass: any;
	public crd: any;
	public obj: any;
	public user: any;
	public api_headers: any;

	constructor(public http: Http, public navCtrl: NavController, public navParams: NavParams, public dataCtrl: Data, public apiCtrl: Api,
                private el: ElementRef, public storage: Storage) {
	this.usr="";
	this.pass="";
	}

	ionViewDidLoad() {
		// console.log('ionViewDidLoad LoginPage');

		//console.log(this.dataCtrl.getData());
		//this.dataCtrl.clear();
		//this.dataCtrl.remove('credentials');
		//this.storage.clear();
		console.log(this.credentials);
	}


	getUser(brr){
	this.api_headers = new Headers();
	this.api_headers.append('Content-type', 'application/json');
	this.api_headers.append('Accept', 'application/json');
	this.api_headers.append('Authorization', 'Bearer ' + this.obj);

	this.http.get('http://gymapp-nuva.herokuapp.com/api/user', { headers: this.api_headers })
		.map(res => res.json())
		.subscribe(data => {
			this.user = data;
			 console.log(this.user)
			 this.navCtrl.setRoot(DashboardPage, {user: this.user});
		});



	}



	buttonClicked () {



	const formData = new FormData();
	formData.append("grant_type", 'password');
	formData.append("client_id", '3');
	formData.append("client_secret", 'HQZYhb5UKpwLs5cfwaHZEBqDTIA2JVtOTabViQ88');
	console.log(this.usr);
	formData.append("username", this.usr);
	formData.append("password", this.pass);
	formData.append("scope", '');

	this.http
						.post('http://gymapp-nuva.herokuapp.com/oauth/token', formData)
						.subscribe( data => {
						 this.crd = data;
						 this.obj = JSON.parse(this.crd._body);

						 this.obj = this.obj.access_token;
						 	//this.obj = "'"+this.obj+"'";
						 console.log(this.obj);

						 	this.dataCtrl.save( { bearer: this.obj } );
                    this.getUser(this.obj);

						 }, error => {
							console.log('Bearer query failed');
						});



	}



}
