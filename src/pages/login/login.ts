import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import firebase from 'firebase';
import { AngularFirestore } from 'angularfire2/firestore';
import Pessoa from '../../classes/Pessoa';

@IonicPage()
@Component({
    selector: 'page-login',
    templateUrl: 'login.html',
})
export class LoginPage {

    constructor(public navCtrl: NavController, public navParams: NavParams, private afAuth: AngularFireAuth, private afs: AngularFirestore) {
    }

    entrarComFacebook() {
        this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
            .then(userCredential => {
                this.afs.doc<Pessoa>(`pessoas/${userCredential.user.uid}`).set({
                    pessoa: 'Pessoa Teste',
                    email: 'teste@gmail.com',
                })
            })
    }

    entrarComoConvidado() {
        this.afAuth
            .auth
            .signInWithEmailAndPassword('gabrieltubiass@gmail.com', '123456')
            .catch(err => {
                console.log('Something went wrong:', err.message);
            });
    }
}
