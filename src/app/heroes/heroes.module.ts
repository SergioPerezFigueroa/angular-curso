import { CommonModule } from '@angular/common';
import {NgModule} from  '@angular/core'; 
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';


@NgModule({
    // COMPONENTES QUE CONTIENE EL MODULO 
    declarations: [
        HeroeComponent,
        ListadoComponent
    ],
    // cosa vicibles a fuera del modulo
    exports: [
         ListadoComponent,
         HeroeComponent
         
    ],
    // van modulos 
    imports: [
        CommonModule 
           
    ]

})


export class HeroesModule{

}