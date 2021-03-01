import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
/* import {ContadorComponent} from './contador/contador/contador.component'; */
import { HeroesModule } from './heroes/heroes.module';
// import { HeroeComponent } from './heroes/heroe/heroe.component';
// import { ListadoComponent } from './heroes/listado/listado.component';
import { ContadorModule } from './contador/contador/contador.module';


//tarea crear un modulo llamado  contador module 
//declaraciones 
//exportaciones


@NgModule({
  declarations: [
    AppComponent,
  /*   ContadorComponent */
    // HeroeComponent,
    // ListadoComponent
  ],
  imports: [
    BrowserModule,
    HeroesModule, 
    ContadorModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
