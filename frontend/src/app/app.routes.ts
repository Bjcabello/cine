import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { SalaComponent } from './sala/sala.component';
import { AsignacionComponent } from './asignacion/asignacion.component';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'pelicula', component: PeliculasComponent },
    { path: 'sala', component: SalaComponent },
    { path: 'asignacion', component: AsignacionComponent },
    {path: '**', redirectTo: 'login' } 
];
