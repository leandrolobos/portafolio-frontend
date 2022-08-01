import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/models/experiencia.model';
import { ExperienciaService } from 'src/app/services/experiencia.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-experiencia',
  templateUrl: './editar-experiencia.component.html',
  styleUrls: ['../login/login.component.css']
})
export class EditarExperienciaComponent implements OnInit {

  experiencia: Experiencia = null;

  constructor(public experienciaService: ExperienciaService, public router: Router, public activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.experienciaService.find(id).subscribe(
      data => {this.experiencia = data;}
    )
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.experienciaService.update(id, this.experiencia).subscribe() 
      Swal.fire({icon: 'success', title: 'Éxito', text: '¡Experiencia editada exitosamente!', showConfirmButton: false, timer: 2000});
      setTimeout('document.location.reload()', 2000);
      this.router.navigate(['']);
  }

}
