import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-hub',
  templateUrl: 'hub.html',
})
export class HubPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  jogar() {
    this.navCtrl.push('QuestaoPage');
  }
}
