import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';

/**
 * Generated class for the SecondPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-second',
  templateUrl: 'second.html',
})
export class SecondPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private appCtrl:App) {
    console.log("second page navcontroller id",navCtrl);
    console.log("active app nav controller from second page",appCtrl.getActiveNav().id)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SecondPage');
  }

  popBack(){
    this.navCtrl.pop();
  }
  pushThird(){
    this.navCtrl.push('ThirdPage')
  }
}
