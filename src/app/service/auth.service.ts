import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';




@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private afAuth: AngularFireAuth, private firestore: AngularFirestore) {}

  // Método para iniciar sesión
  login(email: string, password: string) {
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }

  // Método para obtener el rol del usuario
  getUserRole(uid: string): Observable<string> {
    return this.firestore
      .collection('users')
      .doc(uid)
      .valueChanges()
      .pipe(map((user: any) => user?.role || 'user')); // Retorna 'user' como valor por defecto
  }

  // Método para cerrar sesión
  logout() {
    return this.afAuth.signOut();
  }

  // Método para registrar un nuevo usuario
  register(email: string, password: string, userData: any): Observable<any> {
    // Utilizamos 'from' para convertir la promesa en un observable
    return from(
      this.afAuth
        .createUserWithEmailAndPassword(email, password)
        .then((credential) => {
          // Después de registrar al usuario en Firebase Auth, lo agregamos a Firestore
          return this.firestore
            .collection('users')
            .doc(credential.user?.uid)
            .set({
              firstName: userData.firstName,
              lastName: userData.lastName,
              address: userData.address,
              email: email,
              bloodType: userData.bloodType,
              phone: userData.phone,
              role: userData.role || 'user', // Aseguramos que el rol por defecto sea 'user'
            });
        })
    );
  }

  // Método para registrar un nuevo hospital
  registerHospital(hospital: any): Observable<any> {
    // Usamos 'add' para agregar un hospital a la colección de Firestore
    return from(this.firestore.collection('hospitals').add(hospital));
  }
  
}

