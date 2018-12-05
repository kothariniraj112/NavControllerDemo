import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';

/**
 * Generated class for the FirstPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-first',
  templateUrl: 'first.html',
})
export class FirstPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private appCtrl:App) {
    console.log("first page navcontroller id",navCtrl.id);
    console.log("root app nav controller from firstpage page",appCtrl.getActiveNav().id)


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FirstPage');
  }

  navigateTotab(){
    this.navCtrl.push('TabsPage')
  }

}
