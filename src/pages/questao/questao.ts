import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

@IonicPage()
@Component({
  selector: 'page-questao',
  templateUrl: 'questao.html',
})
export class QuestaoPage {
  pergunta: string = '123';
  alternativas: any[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private afs: AngularFirestore) {
    let perguntas = afs.collection<any>('perguntas');
    perguntas.snapshotChanges().subscribe(data => {
      this.pergunta = data[0].payload.doc.data().pergunta;

      afs.collection<any>('perguntas/' + data[0].payload.doc.id + '/alternativas').valueChanges().subscribe(data => {
        this.alternativas = data;
      })
    })
  }

  responder(alternativa) {
    if (alternativa.correta) {
      this.navCtrl.push('TransicaoPage', {'resposta':'Correta'});
    } else {
      this.navCtrl.push('TransicaoPage', {'resposta':'Incorreta'});
    }
  }
}
