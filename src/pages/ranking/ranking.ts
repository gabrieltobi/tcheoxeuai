import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import Pessoa from '../../classes/Pessoa';
import { AngularFirestore } from 'angularfire2/firestore';
import { AppData } from '../../classes/AppData';

@IonicPage()
@Component({
  selector: 'page-ranking',
  templateUrl: 'ranking.html',
})
export class RankingPage {
  pessoa: Pessoa = new Pessoa()
  pessoas: Pessoa[] = []

  constructor(public navCtrl: NavController, public navParams: NavParams, private afs: AngularFirestore, private appData: AppData) {
    this.pessoa = this.appData.pessoa
  }

  ionViewDidLoad() {
    this.afs.collection<Pessoa>(`pessoas`, ref => ref.orderBy('pontos', 'desc')).snapshotChanges().subscribe(dcaList => {
      this.pessoas.length = 0

      dcaList.forEach(dca => {
        let pessoa = dca.payload.doc.data()
        pessoa.key = dca.payload.doc.id
        this.pessoas.push(pessoa)
      });
    })
  }
}
