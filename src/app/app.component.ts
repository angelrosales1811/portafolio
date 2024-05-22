import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ResumenComponent } from './resumen/resumen.component';
import { ContactoComponent } from './contacto/contacto.component';
import { PortafolioComponent } from './portafolio/portafolio.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ResumenComponent,ContactoComponent,PortafolioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angelRosales';
}
