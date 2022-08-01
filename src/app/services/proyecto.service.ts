import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from '../models/proyecto.model';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  URL = 'https://portafolio-ap.herokuapp.com/';

  constructor(private http: HttpClient) { }

  public list(): Observable<Proyecto[]> {
    return this.http.get<Proyecto[]>(this.URL+'proyectos/listar');
  }

  public find(id: number): Observable<Proyecto>{
    return this.http.get<Proyecto>(this.URL + `proyectos/encontrar/${id}`);
  } 

  public create(proyecto: Proyecto): Observable<any>{
    return this.http.post<any>(this.URL + 'proyectos/crear', proyecto);
  }

  public update(id: number, proyecto: Proyecto): Observable<any>{
    return this.http.put<any>(this.URL + `proyectos/editar/${id}`, proyecto);
  }

  public delete(id: number): Observable<any>{
    return this.http.delete<any>(this.URL + `proyectos/eliminar/${id}`);
  }
}
