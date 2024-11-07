import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private afAuth: AngularFireAuth, private firestore: AngularFirestore) {}

  // Método para iniciar sesión
  login(email: string, password: string) {
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }

  // Método para cerrar sesión
  logout() {
    return this.afAuth.signOut();
  }

  // Método para registrar un nuevo usuario
  register(email: string, password: string, userData: any) {
    // Crear usuario con email y contraseña
    return from(this.afAuth.createUserWithEmailAndPassword(email, password)
      .then((credential) => {
        // Guardar los datos adicionales del usuario en Firestore
        return this.firestore.collection('users').doc(credential.user?.uid).set({
          firstName: userData.firstName,
          lastName: userData.lastName,
          address: userData.address,
          email: email,
          bloodType: userData.bloodType,
          phone: userData.phone
        });
      }));
  }
}

