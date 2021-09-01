import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower: string = 'ricardo';
  nombreUpper: string = 'RICARDO';
  nombreCompleto: string = 'rIcarDo HerNaNdez';

  fecha: Date = new Date();

}
