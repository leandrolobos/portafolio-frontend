import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/models/educacion.model';
import { EducacionService } from 'src/app/services/educacion.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-educacion',
  templateUrl: './editar-educacion.component.html',
  styleUrls: ['../login/login.component.css']
})
export class EditarEducacionComponent implements OnInit {

  educacion: Educacion = null;

  constructor(public educacionService: EducacionService, public router: Router, public activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.educacionService.find(id).subscribe(
      data => {this.educacion = data;}
    )
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.educacionService.update(id, this.educacion).subscribe() 
      Swal.fire({icon: 'success', title: 'Éxito', text: '¡Educación editada exitosamente!', showConfirmButton: false, timer: 2000});
      setTimeout('document.location.reload()', 2000);
      this.router.navigate(['']);
  }

}
