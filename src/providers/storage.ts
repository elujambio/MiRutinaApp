import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';

/*
  Generated class for the Storage provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Data {

	constructor(public storage: Storage) {

	}

	getData() {
		return this.storage.get('credentials');
	}

	save(data) {
		let newData = JSON.stringify(data);
		this.storage.set('credentials', newData);
	}

}
