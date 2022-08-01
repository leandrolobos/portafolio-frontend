import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Habilidad } from 'src/app/models/habilidad.model';
import { HabilidadService } from 'src/app/services/habilidad.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-agregar-skill',
  templateUrl: './agregar-skill.component.html',
  styleUrls: ['../login/login.component.css']
})
export class AgregarSkillComponent implements OnInit {

  skill: string = '';
  description: string = '';
  url_img: string = '';

  constructor(public habilidadService: HabilidadService, public router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const skill = new Habilidad(this.skill, this.description, this.url_img);
    this.habilidadService.create(skill).subscribe()
      Swal.fire({icon: 'success', title: 'Éxito', text: '¡Skill agregada exitosamente!', showConfirmButton: false, timer: 2000});
      setTimeout('document.location.reload()', 2000);
      this.router.navigate(['']);
  }

}
