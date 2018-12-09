import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';

/**
 * Generated class for the LaunchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-launch',
  templateUrl: 'launch.html',
})
export class LaunchPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  clickAboutButton() {
    this.navCtrl.push(AboutPage);
  }

  clickFrameDataButton() {
    this.navCtrl.push(HomePage);
  }

  clickContactButton() {
    this.navCtrl.push(ContactPage);
  }
}
