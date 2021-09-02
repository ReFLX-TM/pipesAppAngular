import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  //i18nSelect
  nombre: string = 'Ricardo';
  genero: string = 'masculino';

  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  //i18nPlural
  clientes: string[] = ['Andrew','Luis','Alejandro','Javi','Ricardo'];

  clientesMap = {
    '=0': 'no tenemos ningun cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    'other': 'tenemos # clientes esperando.'
  }

  cambiarCliente(){
    if ( this.genero === 'masculino' ){
      this.nombre = 'Javi';
      this.genero = 'femenino';
    }
    else if ( this.genero === 'femenino' ){
      this.nombre = 'Ricardo';
      this.genero = 'masculino';
    }
  }

  borrarCliente(){
    if ( this.clientes.length >= 0 ){
      this.clientes.pop();
    }
  }

  //KeyValue Pipe

  persona = {
    nombre: 'ricardo',
    edad: '20',
    direccion: 'Cúcuta, Colombia'
  }

  //Json Pipe

  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: false
    }
  ]

  //Async Pipe

  miObservable = interval(2000);

  valorPromesa = new Promise( (resolve, reject) => {

    setTimeout(() => {
      resolve( 'Tenemos data de promesa' )
    }, 3500);
  } );
}
