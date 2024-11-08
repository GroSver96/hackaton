import { Component } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
import { getAuth, signOut } from 'firebase/auth';
@Component({
  selector: 'app-inicio-hospital',
  templateUrl: './inicio-hospital.component.html',
  styleUrl: './inicio-hospital.component.css'
})
export class InicioHospitalComponent {

  constructor(private router: Router) {}

  onLogout() {
    const auth = getAuth();  // Obtén la instancia de autenticación
    signOut(auth)
      .then(() => {
        console.log('Sesión cerrada');
        this.router.navigate(['/login']); // Redirigir al login después de cerrar sesión
      })
      .catch((error) => {
        console.error('Error al cerrar sesión:', error);
      });
  }
}