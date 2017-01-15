import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

	import { DashboardPage } from '../dashboard/dashboard';


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
  if(role === 1){
  this.dataCtrl.save({bearer: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImMzOTcwNDU1M2MxNzZlN2E2MjExM2E4MDQ3MTRhNDA3MDI3ZTA3N2E0YTA1YmQwNjllZTlmNmYwZTZiMTAyZjRhODgwZGY4NWI5NWZlNmE3In0.eyJhdWQiOiIzIiwianRpIjoiYzM5NzA0NTUzYzE3NmU3YTYyMTEzYTgwNDcxNGE0MDcwMjdlMDc3YTRhMDViZDA2OWVlOWY2ZjBlNmIxMDJmNGE4ODBkZjg1Yjk1ZmU2YTciLCJpYXQiOjE0ODE5MjkyMzYsIm5iZiI6MTQ4MTkyOTIzNiwiZXhwIjoxNTEzNDY1MjM1LCJzdWIiOiI0Iiwic2NvcGVzIjpbImluZm9ybWF0aW9uIl19.F8ifguvSw6BP0mTzciL3dVFzs0a3wQgygThnx4PB0BcxtBA_-9Qw_DbVRKn3_VMM79Ujxlen0JaupvzCecui9OplsFXonvQYwn5NL5zn1rXFsUvszAREtv4EH2TK_1dz6Y7V6prul9_wsxwQBFklVK6_uZgGPKWOA-OUyQcS5uCYeKa_gKW2mNN_0CVMzuC-_MlZJlNMyQcyEe9tcK2oQbV8DmtVM3o7tq2kJe9u0cNIAYKWudwtLv5dZ0_t4Ls2AcHIInOOQj0eMksfhZ51YT9HvQx-A4E5s9oBCBlB-hs1q4PQo6k6MiJ5xzw4ZbchYdZSu5yi6tGfdzTvJp25l5VOs1cb5i1m16WJC78Hm7svMiy3WBPOxccz6LiwiBmXKxXC3sU7byhgujC_W6-zsG0JzZrWvd-LhqOxs9d2MNFZrQMS53hubWioNafaJt0EgZe9HNWobOq5NxhlLqEeTkO1iL0KAITJqLOFQi3Tcghflt-cuQdUW_-042YnQAv8vbazUVmOriePPwGyXPMiOaP2IUFyZ591rqEPmBHG6Rvnl8zyzK7qxEd0H66V-qOf5cBVcHQTiV0n0vyR2WBVVsibny2hgOwJjUi4zV9IcddH59NZ-KkqiLUlAYjPvZpLNBQm8duapjPCUJN28caMwd8xnS64WvoQd1LDRabZ_so'});
}
else{
this.dataCtrl.save({bearer: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImMxMTc0YWE4M2QzYjMwMzY5ZWJlMDg2ODdkZDY0ZjJkMDZmZDU4NTYyNDNkNDdkOTQ4Y2NmODIwMGU1NDc5NjkwMjc3NDY0MWJkM2VhNWU2In0.eyJhdWQiOiIzIiwianRpIjoiYzExNzRhYTgzZDNiMzAzNjllYmUwODY4N2RkNjRmMmQwNmZkNTg1NjI0M2Q0N2Q5NDhjY2Y4MjAwZTU0Nzk2OTAyNzc0NjQxYmQzZWE1ZTYiLCJpYXQiOjE0ODE5MjcwODEsIm5iZiI6MTQ4MTkyNzA4MSwiZXhwIjoxNTEzNDYzMDgxLCJzdWIiOiIxIiwic2NvcGVzIjpbImluZm9ybWF0aW9uIl19.RUi3esMAt-Eka17GPGhjMmjCGLvks-r09Z8NX8EBtKf2mBN7PLpB8KQBEaRjEVTxvofWbj8QtDcmrzvsolLG84mE68-Wbpx7QSjApuaGpZIlLqAXUyP1aBGfvINuZKcUc_B9R6DG0lLbVaFhBjW3BFDc_-z6P-Rj__juImX6ecJ0jqsXiG6U0eb7tBEyw0SFNa95TywUvGima7u6RwWll-PPOgwnVl0diIBu7vD1HOO-uLrpb7qO-d7MTlFtD3qGMwXpEXt97JXbdppzlIWyl0_Y4-wP3Xfifaahwa_ye0se7SlcSn7HwvJQdOXyBJjV_KVlnLCVSkt2n_j_IjfVU1BzfaMjGOGTPxRRMxXHNUWbYNYa2cMYVB6lqv66t1kC1M-VCjITtkBON3XQ7VQE1NCYxNj5F6m51HVIVEUSs1jroXLOdx3nDV9Jdn36TqUhjIMjAVNDLjfykMZRVJ_FG4cwIJvymxmtHj4XYekKWch9BW6XZ-55arOeeteZLtffHobZTYiV8wnLsjFHbbLrkbW33w4xSJzkKoTvRpMwU76DqE3m29rLR6bEgKyDL9HZIfKB549dF7mcoQSP0Tg449QLwxauAZxhWGPeL-4QV4eKehdePJYb31wI06EA5vdTlsqK48B_f_ZSCz5xdj0mF4xEOI7aYj9FrFmSt0QjHT0'});

	
}
  }

  goBack(page){
  if (page === 'dashboard') this.navCtrl.push(DashboardPage, { user: this.user });

  }

}
