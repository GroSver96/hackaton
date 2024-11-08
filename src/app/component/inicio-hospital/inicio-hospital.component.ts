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

  constructor(private authService: AuthService, private router: Router) {}

  onLogout(){
    this.authService.logout()
    this.router.navigate(['/login']); 
  }
}