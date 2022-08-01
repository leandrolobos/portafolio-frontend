import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Curso } from '../models/curso.model';

@Injectable({
  providedIn: 'root'
})
export class CursoService {
  URL = 'https://portafolio-ap.herokuapp.com/';

  constructor(private http: HttpClient) { }

  public list(): Observable<Curso[]> {
    return this.http.get<Curso[]>(this.URL+'cursos/listar');
  }

  public find(id: number): Observable<Curso>{
    return this.http.get<Curso>(this.URL + `cursos/encontrar/${id}`);
  } 

  public create(curso: Curso): Observable<any>{
    return this.http.post<any>(this.URL + 'cursos/crear', curso);
  }

  public update(id: number, curso: Curso): Observable<any>{
    return this.http.put<any>(this.URL + `cursos/editar/${id}`, curso);
  }

  public delete(id: number): Observable<any>{
    return this.http.delete<any>(this.URL + `cursos/eliminar/${id}`);
  }
}
