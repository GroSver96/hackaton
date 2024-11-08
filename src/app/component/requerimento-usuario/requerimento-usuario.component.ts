// import { Component } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service'; // Asegúrate de que la ruta sea correcta

@Component({
  selector: 'app-requerimento-usuario',
  templateUrl: './requerimento-usuario.component.html',
  styleUrl: './requerimento-usuario.component.css'
})
// export class RequerimentoUsuarioComponent {

// }
export class RequerimentoUsuarioComponent implements OnInit {
  isModalOpen = false;

  request = {
    emergencyType: '',
    severity: '',
    location: '',
    description: ''
  };

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.updateLocation(); // Actualiza la ubicación cuando se carga el componente
  }

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  onSubmit() {
    // Aquí llamamos al servicio para guardar la solicitud de ambulancia en Firestore
    this.authService.requestAmbulance(this.request).subscribe({
      next: (response) => {
        console.log('Solicitud enviada con éxito:', response);
        this.closeModal(); // Cierra el modal después de enviar la solicitud
      },
      error: (error) => {
        console.error('Error al enviar la solicitud:', error);
      }
    });
  }

  // Función para actualizar la ubicación en tiempo real
  updateLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.watchPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          this.request.location = `Latitud: ${lat}, Longitud: ${lon}`; // Actualiza la ubicación en el modelo
          document.getElementById('location-display')!.textContent = `Ubicación: Latitud ${lat}, Longitud ${lon}`;
        },
        (error) => {
          alert('Error al obtener la ubicación: ' + error.message);
        },
        {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0
        }
      );
    } else {
      alert('La geolocalización no está disponible en este navegador.');
    }
  }
}
