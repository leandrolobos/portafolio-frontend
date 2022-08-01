import { Component, OnInit } from '@angular/core';
import { Habilidad } from 'src/app/models/habilidad.model';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { HabilidadService } from 'src/app/services/habilidad.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  habilidades: Habilidad[] = [];
  
  constructor(public habilidadService: HabilidadService, public loginService:AuthenticationService) { }

  ngOnInit(): void {
    this.getHabilidad();
  }

  getHabilidad(): void {
    this.habilidadService.list().subscribe(data => {this.habilidades = data;})
  }

  onDelete(id?: number): void {
    if(id != undefined) {
      this.habilidadService.delete(id).subscribe()
        Swal.fire({icon: 'success', title: 'Éxito', text: '¡Skill eliminada exitosamente!', showConfirmButton: false, timer: 2000});
        setTimeout('document.location.reload()', 2000);
    }
  }

}
