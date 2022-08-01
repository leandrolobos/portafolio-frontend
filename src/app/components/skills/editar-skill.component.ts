import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Habilidad } from 'src/app/models/habilidad.model';
import { HabilidadService } from 'src/app/services/habilidad.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-skill',
  templateUrl: './editar-skill.component.html',
  styleUrls: ['../login/login.component.css']
})
export class EditarSkillComponent implements OnInit {

  habilidad: Habilidad = null;

  constructor(public habilidadService: HabilidadService, public router: Router, public activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.habilidadService.find(id).subscribe(
      data => {this.habilidad = data;}
    )
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.habilidadService.update(id, this.habilidad).subscribe() 
      Swal.fire({icon: 'success', title: 'Éxito', text: '¡Skill editada exitosamente!', showConfirmButton: false, timer: 2000});
      setTimeout('document.location.reload()', 2000);
      this.router.navigate(['']);
  }

}
