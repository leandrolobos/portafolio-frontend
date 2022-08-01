import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Curso } from 'src/app/models/curso.model';
import { CursoService } from 'src/app/services/curso.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-agregar-curso',
  templateUrl: './agregar-curso.component.html',
  styleUrls: ['../login/login.component.css']
})
export class AgregarCursoComponent implements OnInit {

  course: string = '';
  institution: string = '';
  lapse: string = '';
  url_img: string = '';

  constructor(public cursoService: CursoService, public router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const curso = new Curso(this.course, this.institution, this.lapse, this.url_img);
    this.cursoService.create(curso).subscribe()
      Swal.fire({icon: 'success', title: 'Éxito', text: '¡Curso agregado exitosamente!', showConfirmButton: false, timer: 2000});
      setTimeout('document.location.reload()', 2000);
      this.router.navigate(['']);
  }

}
