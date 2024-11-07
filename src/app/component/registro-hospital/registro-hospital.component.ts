import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-registro-hospital',
  templateUrl: './registro-hospital.component.html',
  styleUrls: ['./registro-hospital.component.css']
})
export class RegistroHospitalComponent {
  hospital = {
    name: '',
    address: '',
    phoneNumbers: '',
    managerName: '',
    operatingHours: '24 horas', // Valor predeterminado
    level: '',
    insuranceType: '',
    isPrivate: false // Predeterminado como público
  };

  isModalOpen: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  onSubmit() {
    // Llamar a un servicio para guardar los datos del hospital (puede ser un backend o Firebase)
    this.authService.registerHospital(this.hospital).subscribe(
      () => {
        console.log('Hospital registrado exitosamente');
        this.router.navigate(['/inicio-hospital']);
      },
      (error) => {
        console.error('Error al registrar el hospital:', error);
        alert('Error al registrar el hospital. Por favor, intenta nuevamente.');
      }
    );
  }
}
