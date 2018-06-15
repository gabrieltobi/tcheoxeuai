import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

//Firebase
import { AngularFireModule, FirebaseAppConfig } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';

registerLocaleData(localePt, 'pt-BR');

export const firebaseConfig: FirebaseAppConfig = {
  apiKey: "AIzaSyBN818cbl2vBnbvchUNIcX7K_SFSNnHFDQ",
  authDomain: "tcheoxeuai.firebaseapp.com",
  databaseURL: "https://tcheoxeuai.firebaseio.com",
  projectId: "tcheoxeuai",
  storageBucket: "tcheoxeuai.appspot.com",
  messagingSenderId: "518536022593"
};

@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule.enablePersistence(),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    AngularFireAuth,
  ]
})
export class AppModule {}
