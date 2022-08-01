import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../models/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  URL = 'https://portafolio-ap.herokuapp.com/';

  constructor(private http: HttpClient) { }

  public list(): Observable<Persona[]> {
    return this.http.get<Persona[]>(this.URL+'persona/listar');
  }
  
  public find(id: number): Observable<Persona>{
    return this.http.get<Persona>(this.URL + `persona/encontrar/${id}`);
  } 

  public update(id: number, persona: Persona): Observable<any>{
    return this.http.put<any>(this.URL + `persona/editar/${id}`, persona);
  }
}
