import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { Subscription } from 'rxjs';
import Pessoa from '../../classes/Pessoa';
import { AppData } from '../../classes/AppData';

@IonicPage()
@Component({
  selector: 'page-hub',
  templateUrl: 'hub.html',
})
export class HubPage {
  authSubscriber: Subscription = null
  pessoa: Pessoa = new Pessoa()

  constructor(public navCtrl: NavController, public navParams: NavParams, private afAuth: AngularFireAuth, private appData: AppData) {
    this.pessoa = this.appData.pessoa
  }

  jogar() {
    this.navCtrl.push('QuestaoPage');
  }
}
