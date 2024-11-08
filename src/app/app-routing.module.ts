import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { BienvenidaComponent } from './component/bienvenida/bienvenida.component';
import { HospitalesComponent } from './component/hospitales/hospitales.component';
import { PerfilComponent } from './component/perfil/perfil.component';
import { RequerimentoUsuarioComponent } from './component/requerimento-usuario/requerimento-usuario.component';
import { InicioHospitalComponent } from './component/inicio-hospital/inicio-hospital.component';
import { RegistroHospitalComponent } from './component/registro-hospital/registro-hospital.component';
import { RegisterComponent } from './component/register/register.component';
import { InicioParamedicoComponent } from './component/inicio-paramedico/inicio-paramedico.component';
import { RequerimentoParamedicoComponent } from './component/requerimento-paramedico/requerimento-paramedico.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'bienvenida', component: BienvenidaComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'hospitales', component: HospitalesComponent },
  { path: 'perfil', component: PerfilComponent},
  { path: 'requerimento-usuario', component: RequerimentoUsuarioComponent},
  { path: 'inicio-hospital', component: InicioHospitalComponent},
  { path: 'registro-hospital',component: RegistroHospitalComponent},
 
  { path: 'requerimento-paramedico',component: RequerimentoParamedicoComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'inicio-paramedico', component: InicioParamedicoComponent},
  { path: 'requerimento-paramedico', component: RequerimentoParamedicoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
