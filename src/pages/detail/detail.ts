import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovePage } from '../move/move';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
  character: any;
  infotype: string;
  attacks: any;
  basic_moves: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
    this.character = navParams.data.character;
    

    this.loadAttacks();
    // this.initializeBasicMoves();
    this.infotype = "profile"; // default segment button
  }

  loadAttacks() {
    let data: Observable<any> = this.http.get('./assets/data/Attacks/' + this.character.Name +'.json');
    data.subscribe(result => {
      this.attacks = result;
    });
  }

  // initializeBasicMoves() {
  //   this.basic_moves = this.character.basic_moves;
  // }

  searchAttacks(ev: any) {
    let val = ev.target.value;
    if (val && val.trim() != '') {
      this.attacks = this.attacks.filter((attack) => {
        return (attack.Command.toString().toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    } else {
      this.loadAttacks();
    }
  }

  // getBasicMoves(ev: any) {
  //   this.initializeBasicMoves();
  //   let val = ev.target.value;
  //   if (val && val.trim() != '') {
  //     this.basic_moves = this.basic_moves.filter((move) => {
  //       return (move.command.toString().toLowerCase().indexOf(val.toLowerCase()) > -1);
  //     })
  //   }
  // }

  moveSelected(move) {
    this.navCtrl.push(MovePage, {
      move: move
    });
  }

}