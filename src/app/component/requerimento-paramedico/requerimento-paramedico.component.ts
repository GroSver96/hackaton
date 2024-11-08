// requerimento-paramedico.component.ts
import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../service/firebase.service';

@Component({
  selector: 'app-requerimento-paramedico',
  templateUrl: './requerimento-paramedico.component.html',
  styleUrls: ['./requerimento-paramedico.component.css']
})
export class RequerimentoParamedicoComponent implements OnInit {
  ambulanceRequests: any[] = [];

  constructor(private firebaseService: FirebaseService) {}

  ngOnInit(): void {
    this.firebaseService.getAmbulanceRequests().subscribe((data) => {
      this.ambulanceRequests = data.map((e: any) => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        };
      });
    });
  }

  updateRequest(request: any) {
    const dataToUpdate = {
      description: request.description,
      emergencyType: request.emergencyType,
      location: request.location,
      severity: request.severity,
      additionalNotes: request.additionalNotes // nuevo campo para notas adicionales
    };

    this.firebaseService.updateAmbulanceRequest(request.id, dataToUpdate)
      .then(() => {
        alert("Datos actualizados correctamente");
      })
      .catch(error => {
        console.error("Error al actualizar:", error);
      });
  }
}
