import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  tab1Root='Tab1Page'
  tab2Root='Tab2Page'
  tab3Root='Tab3Page'

  constructor(public navCtrl: NavController, public navParams: NavParams,public appCtrl:App) {
    console.log("tabs page navctroller id",navCtrl.id)
    console.log("root app nav controller from tabs page",appCtrl.getActiveNav().id)

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
