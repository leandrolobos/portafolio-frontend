import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/models/persona.model';
import { PersonaService } from 'src/app/services/persona.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-encabezado',
  templateUrl: './editar-encabezado.component.html',
  styleUrls: ['../login/login.component.css']
})
export class EditarEncabezadoComponent implements OnInit {

  persona: Persona = null;

  constructor(public personaService: PersonaService, public router: Router, public activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.personaService.find(id).subscribe(
      data => {this.persona = data;}
    )
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.personaService.update(id, this.persona).subscribe() 
      Swal.fire({icon: 'success', title: 'Éxito', text: '¡Encabezado editado exitosamente!', showConfirmButton: false, timer: 2000});
      setTimeout('document.location.reload()', 2000);
      this.router.navigate(['']);
  }

}
