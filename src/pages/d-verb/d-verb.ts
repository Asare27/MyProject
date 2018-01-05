import { TutorialPage } from './../tutorial/tutorial';
import { VpagePage } from './../vpage/vpage';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DVerbPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-d-verb',
  templateUrl: 'd-verb.html',
})
export class DVerbPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DVerbPage');
  }
    ToTutorial(){
      this.navCtrl.push(TutorialPage);
    }

    Tovideo(){
      this.navCtrl.push(VpagePage)
}
}
