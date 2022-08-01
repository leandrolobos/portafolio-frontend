import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/persona.model';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {

  personas: Persona[] = [];
  
  constructor(public personaService: PersonaService, public loginService:AuthenticationService) { }

  ngOnInit(): void {
    this.getPersona();
  }

  getPersona(): void {
    this.personaService.list().subscribe(data => {this.personas = data;})
  }

}
