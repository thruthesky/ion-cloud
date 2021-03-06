import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { Auth } from '@ionic/cloud-angular';
import { Account } from '../account/account';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  fullname: string;
  mail: any;
  profilepic: any;

  constructor(public navCtrl: NavController, public navPar: NavParams, public auth: Auth) {
    this.fullname = this.navPar.get('fullName');
    this.mail = this.navPar.get('email');
    this.profilepic = this.navPar.get('profilePic');
  }

  logout(){
    this.auth.logout();
    //Log-out user from app
    this.navCtrl.pop(Account);
    alert ("Logout Successful");
  }

}
