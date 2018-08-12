import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MalePage } from '../male/male';
import { FemalePage } from '../female/female';
import { AppinfoPage } from '../appinfo/appinfo';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

    

  }

  GoMale(){
    this.navCtrl.push(MalePage)
  }


  GoFemale(){
    this.navCtrl.push(FemalePage)
  }

  GetAppinfo(){
    this.navCtrl.push(AppinfoPage)
  }
}
