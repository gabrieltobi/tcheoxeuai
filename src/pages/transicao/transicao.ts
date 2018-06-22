import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-transicao',
  templateUrl: 'transicao.html',
})
export class TransicaoPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  continuar() {
    this.navCtrl.push('HubPage');
  }
}