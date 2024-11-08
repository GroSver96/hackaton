
// firebase.service.ts
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class FirebaseService {
  constructor(private firestore: AngularFirestore, private auth: AngularFireAuth) {}

  // Obtener los datos del usuario que ha iniciado sesión
  getCurrentUserProfile(): Observable<any> {
    return this.auth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.firestore.collection('users').doc(user.uid).valueChanges();
        } else {
          return [];
        }
      })
    );
  }

  getAmbulanceRequests() {
    return this.firestore.collection('ambulanceRequests').snapshotChanges();
  }

  updateAmbulanceRequest(id: string, data: any) {
    return this.firestore.collection('ambulanceRequests').doc(id).update(data);
  }

  
}
