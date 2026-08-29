import { Injectable } from '@angular/core';
import { Firestore, doc, docData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface ContenidoPortafolio {
  profesional: any[];
  experiencia: any[];
  educacion: any[];
  servicios: any[];
  testimonios: any[];
}

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  private contenidoRef = doc(
    this.firestore,
    'portafolio/contenido'
  );

  constructor(private firestore: Firestore) {}

  /**
   * Obtiene todo el contenido del portafolio
   */
  obtenerContenido(): Observable<ContenidoPortafolio> {
    return docData(this.contenidoRef) as Observable<ContenidoPortafolio>;
  }
}