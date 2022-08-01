import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/models/educacion.model';
import { EducacionService } from 'src/app/services/educacion.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-agregar-educacion',
  templateUrl: './agregar-educacion.component.html',
  styleUrls: ['../login/login.component.css']
})
export class AgregarEducacionComponent implements OnInit {

  carrer: string = '';
  university: string = '';
  lapse: string = '';
  url_img: string = '';

  constructor(public educacionService: EducacionService, public router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const edu = new Educacion(this.carrer, this.university, this.lapse, this.url_img);
    this.educacionService.create(edu).subscribe()
      Swal.fire({icon: 'success', title: 'Éxito', text: '¡Educación agregada exitosamente!', showConfirmButton: false, timer: 2000});
      setTimeout('document.location.reload()', 2000);
      this.router.navigate(['']);
  }

}
