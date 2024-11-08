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
  isLoading: boolean = false; // Para indicar que el login está en proceso

  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    if (!this.email || !this.password) {
      this.errorMessage = 'Por favor ingresa ambos campos.';
      return;
    }
  
    this.isLoading = true;
    this.errorMessage = '';
  
    this.authService.login(this.email, this.password)
      .then((userCredential) => {
        const uid = userCredential.user?.uid;
        if (uid) {
          this.authService.getUserRole(uid).subscribe(role => {
            this.isLoading = false;
            switch(role) {
              case 'administrador':
                this.router.navigate(['/inicio-hospital']);
                break;
              case 'paramedico':
                this.router.navigate(['/inicio-paramedico']);
                break;
              default:
                this.router.navigate(['/bienvenida']);
                break;
            }
          }, error => {
            this.isLoading = false;
            this.errorMessage = 'Error al obtener el rol del usuario. Por favor, intenta nuevamente.';
          });
        } else {
          this.isLoading = false;
          this.errorMessage = 'No se pudo obtener la información del usuario. Por favor, intenta nuevamente.';
        }
      })
      .catch(error => {
        this.isLoading = false;
        this.errorMessage = 'Correo o contraseña incorrectos. Por favor, intenta de nuevo.';
        console.error('Error de autenticación:', error);
      });
  }
  
}
