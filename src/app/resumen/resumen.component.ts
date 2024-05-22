import { Component } from '@angular/core';
import { DatosService } from '../services/datos.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-resumen',
  standalone: true,
  imports: [],
  templateUrl: './resumen.component.html',
  styleUrl: './resumen.component.css'
})
export class ResumenComponent {
  public profesionalList$!: any;
  public educacionList$!: any;
  public testimonioList$!: any;
  public experienciaList$!: any;
  public serviciosList$!: any;
  constructor(private cv: DatosService) { }

  ngOnInit(): void {
     this.cv.CargarProfesional().subscribe({
      next: (result)=>{
        this.profesionalList$ = result;
        console.log(this.profesionalList$);
      },
      error: (err)=>{
        console.log(err);
      }
    });  
    
    this.cv.CargarEducacion().subscribe({
      next: (result)=>{
        this.educacionList$ = result;
        console.log(this.educacionList$);
      },
      error: (err)=>{
        console.log(err);
      }
    });  

    this.cv.CargarTestimonio().subscribe({
      next: (result)=>{
        this.testimonioList$ = result;
        console.log(this.testimonioList$);
      },
      error: (err)=>{
        console.log(err);
      }
    });  

    this.cv.CargarExperiencia().subscribe({
      next: (result)=>{
        result.forEach((item: any) => {
          item.proyectos = item.Proyectos.split('//');
        });
        this.experienciaList$ = result;
      },
      error: (err)=>{
        console.log(err);
      }
    });  

    this.cv.CargarServicios().subscribe({
      next: (result)=>{
        this.serviciosList$ = result;
        console.log(this.serviciosList$);
      },
      error: (err)=>{
        console.log(err);
      }
    });  

   
  }

}
