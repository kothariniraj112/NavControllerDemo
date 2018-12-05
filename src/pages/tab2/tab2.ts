import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';

/**
 * Generated class for the Tab2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tab2',
  templateUrl: 'tab2.html',
})
export class Tab2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams,private appCtrl:App) {
    console.log("tab2 navcontroller id++++++++++++",navCtrl.id);
    console.log("app active nav controller from tab2 page-------",appCtrl.getActiveNav().id)


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tab2Page');
  }

  navigateTo(){

  this.appCtrl.getRootNav().push('SecondPage')
  // this.navCtrl.push('SecondPage')

  }
}
