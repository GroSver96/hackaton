import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { LoginComponent }from './component/login/login.component';
import { FormsModule } from '@angular/forms';
import { BienvenidaComponent } from './component/bienvenida/bienvenida.component';
import { RegisterComponent } from './component/register/register.component';
import { HospitalesComponent } from './component/hospitales/hospitales.component';
import { PerfilComponent } from './component/perfil/perfil.component';
import { HospitalComponent } from './component/hospital/hospital.component'; 

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BienvenidaComponent,
    RegisterComponent,
    HospitalesComponent,
    PerfilComponent,
    HospitalComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase), // Inicializa Firebase
    AngularFireAuthModule, // Módulo para autenticación
    AngularFirestoreModule, // Módulo para Firestore
    FormsModule // <--- Asegúrate de agregar FormsModule aquí
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


