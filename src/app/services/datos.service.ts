import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, pipe } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatosService {
  profesional: any[] = [];
  educacion: any[] = [];
  testimonio: any[] = [];
  experiencia: any[] = [];
  blog: any[] = [];
  url: any = 'https://portafolio-arj-default-rtdb.firebaseio.com/';

  constructor(private http: HttpClient) {
    this.CargarProfesional();
    this.CargarEducacion();
    this.CargarTestimonio();
    this.CargarExperiencia();
    this.CargarServicios();
  }

  public CargarProfesional(): Observable<any> {
    return this.http.get<any>(this.url  + 'profesional.json').pipe(res => res);
  }

  public CargarEducacion(): Observable<any> {
    return this.http.get<any>(this.url  + 'educacion.json').pipe(res => res);
  }

  public CargarTestimonio(): Observable<any> {
    return this.http.get<any>(this.url  + 'testimonios.json').pipe(res => res);
  }

  public CargarExperiencia(): Observable<any> {
    return this.http.get<any>(this.url  + 'experiencia.json').pipe(res => res);
  }

  public CargarServicios(): Observable<any> {
    return this.http.get<any>(this.url  + 'servicios.json').pipe(res => res);
  }


}
