import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component  {

  //grafica1
  public title1 = "Ventas";
  public labels1: string[] = ['Ventas Realizadas', 'Ventas en Proceso', 'Ventas por Mail'];
  public data1 = [
    [350, 450, 100]
    ];

  //grafica2
  public title2 = "Existencias";
  public labels2: string[] = ['Ropa', 'Comestibles', 'Bebidas'];
  public data2 = [
    [800, 100, 100]
    ];

  //grafica3
  public title3 = "Personal";
  public labels3: string[] = ['Masculino', 'Femenino'];
  public data3 = [
    [800, 200]
    ];

  //grafica4
  public title4 = "Gastos";
  public labels4: string[] = ['Insumos', 'Impuestos', 'Extras'];
  public data4 = [
    [700, 300, 200]
    ];
  
}
