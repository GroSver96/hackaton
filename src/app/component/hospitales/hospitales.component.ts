import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hospitales',
  templateUrl: './hospitales.component.html',
  styleUrl: './hospitales.component.css'
})

export class HospitalesComponent {
  constructor(private router: Router) {}
  volver(){
  this.router.navigate(['/bienvenida']);
}
}
