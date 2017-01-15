import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
/* import providers */
	import { Api } from '../../providers/api';

/*
  Generated class for the Lessonsdetails page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-lessonsdetails',
  templateUrl: 'lessonsdetails.html',
      providers: [Api]
})
export class LessonsdetailsPage {
public idLesson: any;
public details: any;
public teacher: any;
public gymid: any;
public teacherid: any;



  constructor(public navCtrl: NavController, public navParams: NavParams, public apiCtrl: Api) {

  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad LessonsdetailsPage');
    this.idLesson = this.navParams.get('idLesson');
    this.gymid = this.navParams.get('gymId');
    this.teacherid = this.navParams.get('teacherId');
    this.apiCtrl.get('http://gymapp-nuva.herokuapp.com/api/lesson/'+this.idLesson)
      .then(data => {
        this.details = data;
      });
      this.apiCtrl.get('http://gymapp-nuva.herokuapp.com/api/gym/'+this.gymid+"/user/"+this.teacherid)
        .then(data => {
          this.teacher = data;
        console.log(this.teacher);
        });
  }


}
