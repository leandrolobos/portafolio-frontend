import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/models/experiencia.model';
import { ExperienciaService } from 'src/app/services/experiencia.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-agregar-experiencia',
  templateUrl: './agregar-experiencia.component.html',
  styleUrls: ['../login/login.component.css']
})
export class AgregarExperienciaComponent implements OnInit {

  position: string = '';
  company: string = '';
  lapse: string = '';
  url_img: string = '';

  constructor(public experienciaService: ExperienciaService, public router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const exp = new Experiencia(this.position, this.company, this.lapse, this.url_img);
    this.experienciaService.create(exp).subscribe()
      Swal.fire({icon: 'success', title: 'Éxito', text: '¡Experiencia agregada exitosamente!', showConfirmButton: false, timer: 2000});
      setTimeout('document.location.reload()', 2000);
      this.router.navigate(['']);
  }

}
