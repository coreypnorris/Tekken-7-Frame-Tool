import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MovePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-move',
  templateUrl: 'move.html',
})
export class MovePage {
  move:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.move = navParams.data.move;
  }

}
