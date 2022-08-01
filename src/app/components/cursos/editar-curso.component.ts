import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Curso } from 'src/app/models/curso.model';
import { CursoService } from 'src/app/services/curso.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-curso',
  templateUrl: './editar-curso.component.html',
  styleUrls: ['../login/login.component.css']
})
export class EditarCursoComponent implements OnInit {

  curso: Curso = null;

  constructor(public cursoService: CursoService, public router: Router, public activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.cursoService.find(id).subscribe(
      data => {this.curso = data;}
    )
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.cursoService.update(id, this.curso).subscribe() 
      Swal.fire({icon: 'success', title: 'Éxito', text: '¡Curso editado exitosamente!', showConfirmButton: false, timer: 2000});
      setTimeout('document.location.reload()', 2000);
      this.router.navigate(['']);
  }

}
