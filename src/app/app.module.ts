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
import { RequerimentoUsuarioComponent } from './component/requerimento-usuario/requerimento-usuario.component';
import { RequerimentoParamedicoComponent } from './component/requerimento-paramedico/requerimento-paramedico.component';
import { InicioHospitalComponent } from './component/inicio-hospital/inicio-hospital.component';
import { RegistroHospitalComponent } from './component/registro-hospital/registro-hospital.component'; 
import { from } from 'rxjs';
import { InicioParamedicoComponent } from './component/inicio-paramedico/inicio-paramedico.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BienvenidaComponent,
    RegisterComponent,
    HospitalesComponent,
    PerfilComponent,
    RequerimentoUsuarioComponent,
    RequerimentoParamedicoComponent,
    InicioHospitalComponent,
    RegistroHospitalComponent,
    InicioParamedicoComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


