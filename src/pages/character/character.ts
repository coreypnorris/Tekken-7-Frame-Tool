import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovePage } from '../move/move';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the CharacterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-character',
  templateUrl: 'character.html',
})
export class CharacterPage {
  character: any;
  infotype: string;
  moves: any;
  basic_moves: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
    this.character = navParams.data.character;
    this.loadMoves();
  }

  loadMoves() {
    let data: Observable<any> = this.http.get('assets/data/Moves/' + this.character.Name + '.json');
    data.subscribe(result => {
      this.moves = result;
    });
  }

  searchMoves(ev: any) {
    // Reset items back to all of the items
    this.loadMoves();

    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.moves = this.moves.filter((move) => {
        return (move.Command.toString().toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  moveSelected(move) {
    this.navCtrl.push(MovePage, {
      move: move
    });
  }

}