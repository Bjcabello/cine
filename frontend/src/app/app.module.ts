import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // 👈 IMPORTANTE

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { SalasComponent } from './salas/salas.component';
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
    PeliculasComponent,
    SalasComponent,
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
