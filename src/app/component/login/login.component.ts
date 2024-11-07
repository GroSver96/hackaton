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
      .then(() => {
        // Redirige al usuario a la página principal o dashboard después del login exitoso
        this.router.navigate(['/bienvenida']);  // Cambia '/dashboard' por la ruta que desees
      })
      .catch(error => {
        // Muestra el mensaje de error en caso de fallo en la autenticación
        this.errorMessage = 'Correo o contraseña incorrectos. Por favor, intenta de nuevo.';
        console.error('Error de autenticación:', error);
      });
  }
}
