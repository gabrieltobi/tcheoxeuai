import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { AngularFirestore } from 'angularfire2/firestore';
import Pergunta from '../../classes/Pergunta';
import Alternativa from '../../classes/Alternativa';
import { Regioes, Regiao } from '../../classes/Regiao';
import Pessoa from '../../classes/Pessoa';
import { AppData } from '../../classes/AppData';

@IonicPage()
@Component({
  selector: 'page-questao',
  templateUrl: 'questao.html',
})
export class QuestaoPage {
  perguntas: Pergunta[] = []
  perguntasNaoRespondidas: Pergunta[] = []
  alternativas: Alternativa[] = []
  pergunta: Pergunta = new Pergunta()
  regiao: Regioes = null
  pessoa: Pessoa = new Pessoa()
  respondidas: number = null
  regiaoNome: string = ''
  respondidasKey: string = ''
  perguntasRespondidas: string[] = []
  todasRespondidas: boolean = false

  constructor(public navCtrl: NavController, public navParams: NavParams, private afs: AngularFirestore, private appData: AppData, private loadingCtrl: LoadingController, private alertCtrl: AlertController) {
    this.pessoa = this.appData.pessoa
  }

  ionViewCanEnter() {
    return !!this.navParams.get('regiao')
  }

  ionViewDidLoad() {
    const loader = this.loadingCtrl.create({
      content: 'Carregando...'
    });
    loader.present();

    this.regiao = this.navParams.get('regiao')
    this.regiaoNome = Regiao.getNomeRegiao(this.regiao)
    this.perguntasRespondidas = this.pessoa[`respondidas_${this.regiao}`]

    let perguntasCol = this.afs.collection<Pergunta>('perguntas', ref => ref.where('regiao', '==', this.regiao));
    perguntasCol.snapshotChanges().subscribe(dcaList => {
      this.perguntas.length = 0

      dcaList.forEach(dca => {
        let pergunta: Pergunta = dca.payload.doc.data()
        pergunta.key = dca.payload.doc.id
        this.perguntas.push(pergunta)

        if (this.perguntasRespondidas.indexOf(pergunta.key) === -1) {
          this.perguntasNaoRespondidas.push(pergunta)
        }
      });

      this.proximaPergunta()
      loader.dismiss()
    })
  }

  proximaPergunta() {
    if (!this.perguntasNaoRespondidas.length) {
      this.todasRespondidas = true
      return
    }

    this.pergunta = this.perguntasNaoRespondidas[0]

    this.afs.collection<Alternativa>(`perguntas/${this.pergunta.key}/alternativas`).valueChanges().subscribe(data => {
      this.pergunta.alternativas = data;
    })
  }

  responder(alternativa) {
    const loader = this.loadingCtrl.create({
      content: 'Verificando Resposta...'
    });
    loader.present();

    this.perguntasRespondidas.push(this.pergunta.key)
    this.perguntasNaoRespondidas.splice(0, 1)

    let updateObj = {}
    updateObj[`respondidas_${this.regiao}`] = this.perguntasRespondidas

    if (alternativa.correta) {
      updateObj['pontos'] = this.pessoa.pontos + (this.pergunta.peso || 0)
    }

    this.afs.doc<Pessoa>(`pessoas/${this.pessoa.key}`).update(updateObj)
      .then(() => {
        this.navCtrl.push('TransicaoPage', {
          acertou: alternativa.correta
        }, null, () => {
          this.proximaPergunta()
          loader.dismiss()
        });
      })
  }

  exibirDica() {
    const alert = this.alertCtrl.create({
      title: 'Dica',
      subTitle: this.pergunta.dica,
      buttons: ['OK']
    });
    alert.present();
  }

  voltar() {
    this.navCtrl.popTo('HubPage')
  }
}