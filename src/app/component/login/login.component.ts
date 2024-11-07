import { Component } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    this.authService.login(this.email, this.password)
      .then((userCredential) => {
        const uid = userCredential.user?.uid;
        if (uid) {
          this.authService.getUserRole(uid).subscribe(role => {
            if (role === 'administrador') {
              this.router.navigate(['/inicio-hospital']); // Redirigir a inicio-hospital
            } else {
              this.router.navigate(['/bienvenida']); // Redirigir a bienvenida
            }
          });
        }
      })
      .catch(error => {
        this.errorMessage = 'Correo o contraseña incorrectos. Por favor, intenta de nuevo.';
        console.error('Error de autenticación:', error);
      });
  }
}
