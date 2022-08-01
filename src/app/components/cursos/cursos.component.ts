import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/models/curso.model';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { CursoService } from 'src/app/services/curso.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  cursos: Curso[] = [];
  
  constructor(public cursoService: CursoService, public loginService:AuthenticationService) { }

  ngOnInit(): void {
    this.getCurso();
  }

  getCurso(): void {
    this.cursoService.list().subscribe(data => {this.cursos = data;})
  }

  onDelete(id?: number): void {
    if(id != undefined) {
      this.cursoService.delete(id).subscribe()
        Swal.fire({icon: 'success', title: 'Éxito', text: '¡Curso eliminado exitosamente!', showConfirmButton: false, timer: 2000});
        setTimeout('document.location.reload()', 2000);
    }
  }

}
