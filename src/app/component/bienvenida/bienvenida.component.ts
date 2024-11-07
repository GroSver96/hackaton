import { Component } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.component.html',
  styleUrl: './bienvenida.component.css'
})
export class BienvenidaComponent {
constructor(private authService: AuthService, private router: Router) {}


logout(){
  this.authService.logout()
  this.router.navigate(['/login']); 
}

}
