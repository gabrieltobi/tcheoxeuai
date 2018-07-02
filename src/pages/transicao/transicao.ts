import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-transicao',
  templateUrl: 'transicao.html',
})
export class TransicaoPage {
  acertou: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.acertou = this.navParams.get('acertou');
  }

  proximaPergunta() {
    this.navCtrl.popTo('QuestaoPage');
  }

  mudarRegiao() {
    this.navCtrl.push('HubPage');
  }
}
