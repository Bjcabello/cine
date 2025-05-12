import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PeliculaComponent } from './pelicula/pelicula.component';
import { SalaComponent } from './sala/sala.component';
import { AsignacionComponent } from './asignacion/asignacion.component';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'pelicula', component: PeliculaComponent },
    { path: 'sala', component: SalaComponent },
    { path: 'asignacion', component: AsignacionComponent },
    {path: '**', redirectTo: 'login' } 
];
