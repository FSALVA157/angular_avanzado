import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit {

  ngOnInit(): void {
    this.btnClass = `btn ${this.btnClass}`;
  }

  @Input('valor')
  progress: number=50;

  @Input()
  btnClass: string = "btn-info";

  @Output()
  valorOutput:EventEmitter<number> = new EventEmitter();

  getporcentaje(){
    return `${this.progress}%`;
  }

  cambiarValor(valor: number){
    if(this.progress <= 0 && valor < 0){
      this.valorOutput.emit(0)
      return this.progress = 0;
    }
    if(this.progress >= 100 && valor > 0){
      this.valorOutput.emit(100);
      return this.progress = 100;
    }
    this.progress = this.progress + valor;
    this.valorOutput.emit(this.progress);
  }

  onChange(valor:number){
    if((valor < 0)||(valor == null)){
      valor = 0;
    }
    if(valor > 100){
      valor = 100;
    }
    this.valorOutput.emit(valor);
    
  }

}
