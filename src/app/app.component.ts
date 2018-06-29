import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';
import Pessoa from '../classes/Pessoa';
import { AppData } from '../classes/AppData';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = 'LoginPage';
  authState: any = null;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private afAuth: AngularFireAuth, private afs: AngularFirestore, private appData: AppData) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    this.afAuth.authState.subscribe((auth) => {
      if (auth) {
        this.rootPage = 'HubPage'

        this.afs.doc<Pessoa>(`pessoas/${auth.uid}`).snapshotChanges().subscribe(data => {
          let pessoa: Pessoa = data.payload.data()
          pessoa.key = data.payload.id
          Object.assign(this.appData.pessoa, pessoa)
        })
      } else {
        this.rootPage = 'LoginPage'
      }
    });
  }
}

