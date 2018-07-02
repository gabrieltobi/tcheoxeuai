import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Subscription } from 'rxjs';
import Pessoa from '../../classes/Pessoa';
import { AppData } from '../../classes/AppData';
import { Regioes } from '../../classes/Regiao';

@IonicPage()
@Component({
  selector: 'page-hub',
  templateUrl: 'hub.html',
})
export class HubPage {
  authSubscriber: Subscription = null
  pessoa: Pessoa = new Pessoa()
  Regioes = Regioes

  constructor(public navCtrl: NavController, public navParams: NavParams, private appData: AppData) {
    this.pessoa = this.appData.pessoa
  }

  jogar(regiao: Regioes) {
    this.navCtrl.push('QuestaoPage', {
      regiao: regiao
    });
  }

  ranking() {
    this.navCtrl.push('RankingPage')
  }
}
