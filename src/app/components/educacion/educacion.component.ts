import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/models/educacion.model';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { EducacionService } from 'src/app/services/educacion.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  educaciones: Educacion[] = [];
  
  constructor(public educacionService: EducacionService, public loginService:AuthenticationService) { }

  ngOnInit(): void {
    this.getEducacion();
  }

  getEducacion(): void {
    this.educacionService.list().subscribe(data => {this.educaciones = data;})
  }

  onDelete(id?: number): void {
    if(id != undefined) {
      this.educacionService.delete(id).subscribe()
        Swal.fire({icon: 'success', title: 'Éxito', text: '¡Educación eliminada exitosamente!', showConfirmButton: false, timer: 2000});
        setTimeout('document.location.reload()', 2000);
    }
  }

}
