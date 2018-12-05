import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';

/**
 * Generated class for the Tab3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tab3',
  templateUrl: 'tab3.html',
})
export class Tab3Page {

  constructor(public navCtrl: NavController, public navParams: NavParams,private appCtrl:App) {
    console.log("tab3 navcontroller id++++++++++++",navCtrl.id);
    console.log("app active nav controller from tab3 page-------",appCtrl.getActiveNav().id)

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tab3Page');
  }

}
