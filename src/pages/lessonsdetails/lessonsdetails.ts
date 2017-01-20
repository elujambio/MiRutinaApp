import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
/* import providers */
import { Api } from '../../providers/api';
import { NavbarTitle } from "../../providers/navbar-title";

/*
  Generated class for the Lessonsdetails page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-lessonsdetails',
  templateUrl: 'lessonsdetails.html',
    providers: [Api, NavbarTitle]
})
export class LessonsdetailsPage {
public idLesson: any;
public details: any;
public teacher: any;
public gymid: any;
public teacherid: any;
public title = "";
public lectures_by_day: any;

  constructor(public navTitle: NavbarTitle, public navCtrl: NavController, public navParams: NavParams, public apiCtrl: Api) {
        //console.log('ionViewDidLoad LessonsdetailsPage');
    this.idLesson = this.navParams.get('idLesson');
    this.gymid = this.navParams.get('gymId');
    this.teacherid = this.navParams.get('teacherId');
    this.apiCtrl.get('http://gymapp-nuva.herokuapp.com/api/lesson/'+this.idLesson+'/lecture')
      .then(data => {
        this.details = data;
        navTitle.setTitle(this.details.name);
      });
      this.apiCtrl.get('http://gymapp-nuva.herokuapp.com/api/gym/'+this.gymid+"/user/"+this.teacherid)
        .then(data => {
          this.teacher = data;
          console.log(this.teacher);
        });
  }

  ionViewDidLoad() {

  }

  addSource(img){
  let image = "https://s3-us-west-1.amazonaws.com/mirutina/" + img;
  return image;
  }


}
