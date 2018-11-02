import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { RegistrarEmpleadoComponent } from './components/registrar-empleado/registrar-empleado.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RegistrarEmpleadoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
