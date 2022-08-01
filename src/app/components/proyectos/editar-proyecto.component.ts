import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/models/proyecto.model';
import { ProyectoService } from 'src/app/services/proyecto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-proyecto',
  templateUrl: './editar-proyecto.component.html',
  styleUrls: ['../login/login.component.css']
})
export class EditarProyectoComponent implements OnInit {

  proyecto: Proyecto = null;

  constructor(public proyectoService: ProyectoService, public router: Router, public activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.proyectoService.find(id).subscribe(
      data => {this.proyecto = data;}
    )
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.proyectoService.update(id, this.proyecto).subscribe() 
      Swal.fire({icon: 'success', title: 'Éxito', text: '¡Proyecto editado exitosamente!', showConfirmButton: false, timer: 2000});
      setTimeout('document.location.reload()', 2000);
      this.router.navigate(['']);
  }

}
