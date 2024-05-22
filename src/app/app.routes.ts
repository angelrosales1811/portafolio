import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'resumen',
        loadChildren:() =>import('./resumen/resumen.routes').then(m => m.RESUMEN_ROUTES)
    },
    {
        path:'portafolio',
        loadChildren:() =>import('./portafolio/portafolio.routes').then(m => m.PORTAFOLIO_ROUTES)
    },
    {
        path:'contacto',
        loadChildren:() =>import('./contacto/contacto.routes').then(m => m.CONTACTO_ROUTES)
    }
];
