import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Habilidad } from '../models/habilidad.model';

@Injectable({
  providedIn: 'root'
})
export class HabilidadService {
  URL = 'https://portafolio-ap.herokuapp.com/';

  constructor(private http: HttpClient) { }

  public list(): Observable<Habilidad[]> {
    return this.http.get<Habilidad[]>(this.URL+'habilidades/listar');
  }

  public find(id: number): Observable<Habilidad>{
    return this.http.get<Habilidad>(this.URL + `habilidades/encontrar/${id}`);
  } 

  public create(habilidad: Habilidad): Observable<any>{
    return this.http.post<any>(this.URL + 'habilidades/crear', habilidad);
  }

  public update(id: number, habilidad: Habilidad): Observable<any>{
    return this.http.put<any>(this.URL + `habilidades/editar/${id}`, habilidad);
  }

  public delete(id: number): Observable<any>{
    return this.http.delete<any>(this.URL + `habilidades/eliminar/${id}`);
  }
}
