import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/* import providers */
	import { Data } from '../../providers/storage';

/* import linked pages */
	import { DashboardPage } from '../dashboard/dashboard';

@Component({
	selector: 'page-login',
	templateUrl: 'login.html',
	providers: [Data]
})
export class LoginPage {

	public credentials: any;

	constructor(public navCtrl: NavController, public navParams: NavParams, public dataCtrl: Data) {

		this.dataCtrl.getData().then((credentials) => {
			if (credentials) {
				this.credentials = JSON.parse(credentials);
				//console.log(this.credentials);
				this.navCtrl.setRoot(DashboardPage);
			}
			else {

			}
		});

	}

	ionViewDidLoad() {
		// console.log('ionViewDidLoad LoginPage');
	}

	buttonClicked () {
		this.dataCtrl.save({bearer: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImMxMTc0YWE4M2QzYjMwMzY5ZWJlMDg2ODdkZDY0ZjJkMDZmZDU4NTYyNDNkNDdkOTQ4Y2NmODIwMGU1NDc5NjkwMjc3NDY0MWJkM2VhNWU2In0.eyJhdWQiOiIzIiwianRpIjoiYzExNzRhYTgzZDNiMzAzNjllYmUwODY4N2RkNjRmMmQwNmZkNTg1NjI0M2Q0N2Q5NDhjY2Y4MjAwZTU0Nzk2OTAyNzc0NjQxYmQzZWE1ZTYiLCJpYXQiOjE0ODE5MjcwODEsIm5iZiI6MTQ4MTkyNzA4MSwiZXhwIjoxNTEzNDYzMDgxLCJzdWIiOiIxIiwic2NvcGVzIjpbImluZm9ybWF0aW9uIl19.RUi3esMAt-Eka17GPGhjMmjCGLvks-r09Z8NX8EBtKf2mBN7PLpB8KQBEaRjEVTxvofWbj8QtDcmrzvsolLG84mE68-Wbpx7QSjApuaGpZIlLqAXUyP1aBGfvINuZKcUc_B9R6DG0lLbVaFhBjW3BFDc_-z6P-Rj__juImX6ecJ0jqsXiG6U0eb7tBEyw0SFNa95TywUvGima7u6RwWll-PPOgwnVl0diIBu7vD1HOO-uLrpb7qO-d7MTlFtD3qGMwXpEXt97JXbdppzlIWyl0_Y4-wP3Xfifaahwa_ye0se7SlcSn7HwvJQdOXyBJjV_KVlnLCVSkt2n_j_IjfVU1BzfaMjGOGTPxRRMxXHNUWbYNYa2cMYVB6lqv66t1kC1M-VCjITtkBON3XQ7VQE1NCYxNj5F6m51HVIVEUSs1jroXLOdx3nDV9Jdn36TqUhjIMjAVNDLjfykMZRVJ_FG4cwIJvymxmtHj4XYekKWch9BW6XZ-55arOeeteZLtffHobZTYiV8wnLsjFHbbLrkbW33w4xSJzkKoTvRpMwU76DqE3m29rLR6bEgKyDL9HZIfKB549dF7mcoQSP0Tg449QLwxauAZxhWGPeL-4QV4eKehdePJYb31wI06EA5vdTlsqK48B_f_ZSCz5xdj0mF4xEOI7aYj9FrFmSt0QjHT0'});

		this.navCtrl.setRoot(DashboardPage);
	}

}
