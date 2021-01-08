import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: [
    './progress.component.css'
  ]
})
export class ProgressComponent  {

  valor1: number = 20;
  valor2: number = 80;

  getPorcentaje1(){
    return `${this.valor1}%`;
  }

  getPorcentaje2(){
    return `${this.valor2}%`;
  }

  
}
