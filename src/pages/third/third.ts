import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';

/**
 * Generated class for the ThirdPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-third',
  templateUrl: 'third.html',
})
export class ThirdPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private appCtrl:App) {
    console.log("third page navcontroller id",navCtrl);
    console.log("active app nav controller from third page",appCtrl.getActiveNav().id)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ThirdPage');
  }

}
