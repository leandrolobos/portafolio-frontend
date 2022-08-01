import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/models/proyecto.model';
import { ProyectoService } from 'src/app/services/proyecto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-agregar-proyecto',
  templateUrl: './agregar-proyecto.component.html',
  styleUrls: ['../login/login.component.css']
})
export class AgregarProyectoComponent implements OnInit {

  title: string = '';
  description: string = '';
  lapse: string = '';
  url_img: string = '';
  link_proyecto: string = '';

  constructor(public proyectoService: ProyectoService, public router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const proyecto = new Proyecto(this.title, this.description, this.lapse, this.url_img, this.link_proyecto);
    this.proyectoService.create(proyecto).subscribe()
      Swal.fire({icon: 'success', title: 'Éxito', text: '¡Proyecto agregado exitosamente!', showConfirmButton: false, timer: 2000});
      setTimeout('document.location.reload()', 2000);
      this.router.navigate(['']);
  }

}
