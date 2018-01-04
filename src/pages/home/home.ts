import { DVerbPage } from './../d-verb/d-verb';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  verb(){
    this.navCtrl.push(DVerbPage)
  };


}
