import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { PeliculaComponent } from './pelicula/pelicula.component';
import { SalaComponent } from './sala/sala.component';
import { AsignacionComponent } from './asignacion/asignacion.component';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { NgFor, NgIf } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    PeliculaComponent,
    SalaComponent,
    AsignacionComponent,
    LoginComponent

  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgFor,
    NgIf,
    RouterLink,
    RouterLinkActive,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
