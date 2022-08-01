import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/models/experiencia.model';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ExperienciaService } from 'src/app/services/experiencia.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  experiencias: Experiencia[] = [];
  
  constructor(public experienciaService: ExperienciaService, public loginService:AuthenticationService) { }

  ngOnInit(): void {
    this.getExperiencia();
  }

  getExperiencia(): void {
    this.experienciaService.list().subscribe(data => {this.experiencias = data;})
  }

  onDelete(id?: number): void {
    if(id != undefined) {
      this.experienciaService.delete(id).subscribe()
        Swal.fire({icon: 'success', title: 'Éxito', text: '¡Experiencia eliminada exitosamente!', showConfirmButton: false, timer: 2000});
        setTimeout('document.location.reload()', 2000);
    }
  }

}
