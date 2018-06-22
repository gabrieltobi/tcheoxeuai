import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

@IonicPage()
@Component({
    selector: 'page-login',
    templateUrl: 'login.html',
})
export class LoginPage {

    constructor(public navCtrl: NavController, public navParams: NavParams, private afAuth: AngularFireAuth) {
    }

    logar() {
        this.afAuth
            .auth
            .signInWithEmailAndPassword('gabrieltubiass@gmail.com', '123456')
            .then(value => {
                //this.navCtrl.setRoot('HubPage');
            })
            .catch(err => {
                console.log('Something went wrong:', err.message);
            });
    }
}
