import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

import { Data } from '../providers/storage';

@Injectable()
export class Api {
	public data: any;
	public credentials: any;

	constructor(public http: Http, public dataCtrl: Data) { }

	get(url) {

		return new Promise (resolve => {

			this.getHeaders()
				.then((api_headers) => {

					this.http.get(url, { headers: api_headers })
						.map(res => res.json())
						.subscribe(data => {
							this.data = data;
							resolve(this.data);
						});

				});

		});

	}

	post(url, data) {

		return new Promise (resolve => {

			this.getHeaders()
				.then((api_headers) => {
					this.http.post(url, data)
						.subscribe(data => {
							this.data = data;
						}, error => {
							console.log('Post to url: ' + url + ' failed');
						});
				});

		});

	}

	getHeaders() {

		if (this.credentials) {
			return Promise.resolve(JSON.parse(this.credentials));
		}

		return new Promise (resolve => {

			this.dataCtrl.getData()
				.then((credentials) => {
					this.credentials = JSON.parse(credentials);

					let api_headers = new Headers();
					api_headers.append('Content-type', 'application/json');
					api_headers.append('Accept', 'application/json');
					api_headers.append('Authorization', 'Bearer ' + this.credentials.bearer);

					resolve(api_headers);
				});

		});

		

	}

}
