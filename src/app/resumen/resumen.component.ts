import { Component, OnInit } from '@angular/core';
import { DatosService } from '../services/datos.service';

@Component({
  selector: 'app-resumen',
  standalone: true,
  imports: [],
  templateUrl: './resumen.component.html',
  styleUrl: './resumen.component.css',
})
export class ResumenComponent implements OnInit {

  public profesionalList$: any[] = [];
  public educacionList$: any[] = [];
  public testimonioList$: any[] = [];
  public experienciaList$: any[] = [];
  public serviciosList$: any[] = [];

  constructor(private cv: DatosService) {}

  ngOnInit(): void {
    this.cv.obtenerContenido().subscribe({
      next: (data) => {

        this.profesionalList$ = data.profesional ?? [];

        this.educacionList$ = data.educacion ?? [];

        this.testimonioList$ = data.testimonios ?? [];

        this.serviciosList$ = data.servicios ?? [];

        this.experienciaList$ = (data.experiencia ?? []).map(
          (item: any) => ({
            ...item,
            proyectos: Array.isArray(item.proyectos)
              ? item.proyectos
              : item.Proyectos?.split('//') ?? []
          })
        );

        console.log('Contenido Firestore:', data);
      },

      error: (err) => {
        console.error('Error al cargar Firestore:', err);

        this.cargarInformacionRespaldo();
      }
    });
  }

  private cargarInformacionRespaldo(): void {

    this.profesionalList$ = [
      {
        nombre: 'Angular',
        porcentaje: 90,
        valor: '9',
      },
      {
        nombre: 'TypeScript',
        porcentaje: 85,
        valor: '8',
      },
      {
        nombre: 'JavaScript',
        porcentaje: 85,
        valor: '8',
      },
      {
        nombre: 'Java',
        porcentaje: 70,
        valor: '6',
      },
      {
        nombre: 'SQL',
        porcentaje: 75,
        valor: '7',
      },
    ];

    this.educacionList$ = [
      {
        nombre: 'Licenciatura en Ingeniería de Software',
        fecha: '2011 - 2015',
        grado: 'Licenciatura',
        descripcion:
          'Formación profesional en desarrollo de software, programación, bases de datos, ingeniería de sistemas y metodologías para el desarrollo de aplicaciones.',
      },
      {
        nombre: 'Certificación en Desarrollo Web',
        fecha: '2016',
        grado: 'Certificación',
        descripcion:
          'Especialización en desarrollo de aplicaciones web utilizando tecnologías frontend, backend, servicios web y bases de datos.',
      },
    ];

    this.testimonioList$ = [
      {
        nombre: 'Carlos Hernández',
        cargo: 'Líder Técnico',
        descripcion:
          'Ángel es un desarrollador comprometido, con gran capacidad para resolver problemas técnicos y proponer soluciones eficientes.',
      },
      {
        nombre: 'María González',
        cargo: 'Project Manager',
        descripcion:
          'He tenido la oportunidad de trabajar con Ángel en proyectos de desarrollo de software.',
      },
    ];

    this.experienciaList$ = [
      {
        empresa: 'Empresa de Tecnología S.A. de C.V.',
        puesto: 'Desarrollador Frontend Angular',
        fechaInicial: 'Enero 2022',
        fechaFin: 'Actualidad',
        proyectos: [
          'Desarrollo de aplicaciones web empresariales utilizando Angular y TypeScript.',
          'Implementación de componentes reutilizables.',
          'Integración con APIs REST.',
          'Optimización del rendimiento.',
        ],
      },
      {
        empresa: 'Empresa Financiera S.A. de C.V.',
        puesto: 'Desarrollador Full Stack',
        fechaInicial: 'Junio 2018',
        fechaFin: 'Diciembre 2021',
        proyectos: [
          'Desarrollo de aplicaciones financieras.',
          'Servicios REST con Java.',
          'Angular y TypeScript.',
          'Bases de datos SQL.',
        ],
      },
    ];

    this.serviciosList$ = [
      {
        icono: 'ion-pie-graph',
        nombre: 'Desarrollo Web',
        descripcion:
          'Desarrollo de aplicaciones web modernas, responsivas y escalables.',
      },
      {
        icono: 'ion-paintbucket',
        nombre: 'Soluciones en la Nube',
        descripcion:
          'Diseño e integración de soluciones basadas en servicios cloud.',
      },
      {
        icono: 'ion-code',
        nombre: 'Integración de APIs',
        descripcion:
          'Integración de sistemas mediante APIs REST y servicios web.',
      },
    ];
  }
}