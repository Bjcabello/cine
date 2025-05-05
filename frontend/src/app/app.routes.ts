import { Routes } from '@angular/router';
import { InicioSesionComponent } from './componentes/inicio-sesion/inicio-sesion.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { ListadoPeliculasComponent } from './componentes/peliculas/listado-peliculas/listado-peliculas.component';

export const routes: Routes = [
  { path: '', component: InicioSesionComponent },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./componentes/dashboard/dashboard.component').then(
        (m) => m.DashboardComponent
      ),
  },
  { path: 'peliculas', component: ListadoPeliculasComponent }
];
