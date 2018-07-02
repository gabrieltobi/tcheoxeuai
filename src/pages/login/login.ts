import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
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
    constructor(private afAuth: AngularFireAuth, private afs: AngularFirestore) {
    }

    entrarComFacebook() {
        this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
            .then(userCredential => {
                if (userCredential.additionalUserInfo.isNewUser) {
                    this.afs.doc<Pessoa>(`pessoas/${userCredential.user.uid}`).set({
                        pessoa: userCredential.user.displayName,
                        email: userCredential.user.email,
                        fotourl: userCredential.user.photoURL,
                        datacriacao: firebase.firestore.FieldValue.serverTimestamp(),
                        pontos: 0
                    })
                }
            })
    }

    entrarComoVisitante() {
        this.afAuth
            .auth
            .signInAnonymously()
            .catch(console.error);
    }

    demonstracao() {
        this.afAuth
            .auth
            .signInWithEmailAndPassword('admin@tcheoxeuai.com', '123465')
            .catch(console.error);
    }
}
