import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-transicao',
  templateUrl: 'transicao.html',
})
export class TransicaoPage {
  resposta: string = 'Errado';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.resposta =   this.navParams.get('resposta');
  }

  continuar() {
    this.navCtrl.push('HubPage');
  }
}
