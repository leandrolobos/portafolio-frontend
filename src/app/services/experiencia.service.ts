import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../models/experiencia.model';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  URL = 'https://portafolio-ap.herokuapp.com/';

  constructor(private http: HttpClient) { }

  public list(): Observable<Experiencia[]> {
    return this.http.get<Experiencia[]>(this.URL+'experiencias/listar');
  }

  public find(id: number): Observable<Experiencia>{
    return this.http.get<Experiencia>(this.URL + `experiencias/encontrar/${id}`);
  } 

  public create(experiencia: Experiencia): Observable<any>{
    return this.http.post<any>(this.URL + 'experiencias/crear', experiencia);
  }

  public update(id: number, experiencia: Experiencia): Observable<any>{
    return this.http.put<any>(this.URL + `experiencias/editar/${id}`, experiencia);
  }

  public delete(id: number): Observable<any>{
    return this.http.delete<any>(this.URL + `experiencias/eliminar/${id}`);
  }
}
