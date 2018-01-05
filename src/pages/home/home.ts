import { HelpPage } from './../help/help';
import { DVerbPage } from './../d-verb/d-verb';
import { IntroPage } from './../intro/intro';
import { VpagePage } from './../vpage/vpage';
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



 help(){
  this.navCtrl.push(HelpPage)
};
intro(){
  this.navCtrl.push(IntroPage)

  
};

tovideo(){
  this.navCtrl.push(VpagePage)

  
}
}