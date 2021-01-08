import { Component, Input, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'app-donuts',
  templateUrl: './donuts.component.html',
  styles: [
  ]
})
export class DonutsComponent {

@Input()  
public titulo: string = 'Sin Titulo';

  // Doughnut
@Input()
public doughnutChartLabels: Label[] =[] ;
@Input()
public doughnutChartData: MultiDataSet = [
  [0, 0, 0]
   
];
public doughnutChartType: ChartType = 'doughnut';

}
