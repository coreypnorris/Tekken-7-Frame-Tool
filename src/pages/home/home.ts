import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavController, ModalController } from 'ionic-angular';
import { DetailPage } from '../detail/detail';
import { AboutPage } from '../about/about';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public characters: any;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public http: HttpClient) {
    let data: Observable<any> = this.http.get('./assets/data/Characters.json');
    data.subscribe(result => {
      this.characters = result;
    });
  }

  aboutPage() {
    this.navCtrl.push(AboutPage);
  }

  characterSelected(character) {
    this.navCtrl.push(DetailPage, {
      character: character
    });
  }
}
