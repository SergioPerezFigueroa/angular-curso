import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',

})
export class ListadoComponent {

  heroes: string[] = ['Iroman','spderman','tor','huñk','chapulin Colorado']; 



  heroeBorrado : string = '';

  borrarHeroe(){
    
    // console.log('Borando');

    /* this.heroes =[]; borra todo */

    this.heroeBorrado=this.heroes.shift() || '';

      // this.heroeBorrado = heroeBorrado; 


  }


}
