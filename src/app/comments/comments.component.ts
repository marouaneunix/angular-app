import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  value: number = 10;
  icon: string = 'bomb';
  // Pie
  public pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'top',
    },
    plugins: {
      datalabels: {
        formatter: (value, ctx) => {
          const label = ctx.chart.data.labels[ctx.dataIndex];
          return label;
        },
      },
    }
  };
  public pieChartLabels: Label[] = ['40 Confirmées', '60 Facturées'];
  public pieChartData: number[] = [40, 50];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [pluginDataLabels];
  public pieChartColors = [
    {
      backgroundColor: ['rgba(255,0,0,0.3)', 'rgba(0,255,0,0.3)'  ],
    },
  ];

  constructor() { }

  ngOnInit() {
  }

  // events
  public chartClicked(event: any): void {
    console.log(event);
  }

  public chartHover({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }


  

  

}
