import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';

/**
 * Generated class for the Tab1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tab1',
  templateUrl: 'tab1.html',
})
export class Tab1Page {

  constructor(public navCtrl: NavController, public navParams: NavParams,private appCtrl:App) {
    console.log("tab1 navcontroller id++++++++",navCtrl.id);
    console.log("app active nav controller from tab1 page---------",appCtrl.getActiveNav().id)

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tab1Page');
  }

}
