import { Component } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  isModalOpen = false;

  user = {
    firstName: '',
    lastName: '',
    address: '',
    email: '',
    password: '',
    bloodType: '',
    phone: '',
    role: 'usuario'
  };

  constructor(private authService: AuthService,private router: Router) {}

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  onSubmit() {
    this.authService.register(this.user.email, this.user.password, this.user)
      .subscribe(
        () => {
          console.log('Usuario registrado exitosamente');
          this.router.navigate(['/bienvenida']); 
          this.closeModal();
        },
        (error) => {
          console.error('Error al registrar al usuario:', error);
          alert('Error al registrar al usuario. Por favor, intenta nuevamente.');
        }
      );
  }
}
