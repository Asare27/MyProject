import { TutorialPage } from './../tutorial/tutorial';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VPage } from '../v/v';
import { ExPage } from '../ex/ex';

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
      // function to TutorialPage
    ToTutorial(){
      this.navCtrl.push(TutorialPage);
    }
    
    //function to video Page

    ToVideo(){
       this.navCtrl.push(VPage);
    }

    //function to Exercise Page
    ToExPage(){
      this.navCtrl.push(ExPage);
    }
}
