import { Component } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio-paramedico',
  templateUrl: './inicio-paramedico.component.html',
  styleUrl: './inicio-paramedico.component.css'
})
export class InicioParamedicoComponent {
  constructor(private authService: AuthService, private router: Router) {}

  logout(){
    this.authService.logout()
    this.router.navigate(['/login']); 
  }
}
