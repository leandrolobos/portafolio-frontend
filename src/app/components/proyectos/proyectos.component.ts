import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/models/proyecto.model';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ProyectoService } from 'src/app/services/proyecto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  proyectos: Proyecto[] = [];
  
  constructor(public proyectoService: ProyectoService, public loginService:AuthenticationService) { }

  ngOnInit(): void {
    this.getProyecto();
  }

  getProyecto(): void {
    this.proyectoService.list().subscribe(data => {this.proyectos = data;})
  }

  onDelete(id?: number): void {
    if(id != undefined) {
      this.proyectoService.delete(id).subscribe()
        Swal.fire({icon: 'success', title: 'Éxito', text: '¡Proyecto eliminado exitosamente!', showConfirmButton: false, timer: 2000});
        setTimeout('document.location.reload()', 2000);
    }
  }

}
