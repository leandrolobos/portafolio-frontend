import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../models/educacion.model';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  URL = 'https://portafolio-ap.herokuapp.com/';

  constructor(private http: HttpClient) { }

  public list(): Observable<Educacion[]> {
    return this.http.get<Educacion[]>(this.URL+'educacion/listar');
  }

  public find(id: number): Observable<Educacion>{
    return this.http.get<Educacion>(this.URL + `educacion/encontrar/${id}`);
  } 

  public create(educacion: Educacion): Observable<any>{
    return this.http.post<any>(this.URL + 'educacion/crear', educacion);
  }

  public update(id: number, educacion: Educacion): Observable<any>{
    return this.http.put<any>(this.URL + `educacion/editar/${id}`, educacion);
  }

  public delete(id: number): Observable<any>{
    return this.http.delete<any>(this.URL + `educacion/eliminar/${id}`);
  }
}
