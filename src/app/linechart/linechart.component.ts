import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-linechart',
  templateUrl: './linechart.component.html',
  styleUrls: ['./linechart.component.css'],
})
export class LinechartComponent implements OnChanges {
  chartOptions: {};
  votes = [];
  id = [];
  Highcharts = Highcharts;

  @Input() myinput;
  @Input() myinput1;
  constructor() {
   
  }

  ngOnChanges(changes: SimpleChanges) {
    this.chartOptions = {
      credits: {
        enabled: false,
      },
      title: {
        text: '',
      },

      subtitle: {
        text: '',
      },

      yAxis: {
        title: {
          text: 'Votes',
        },
      },

      xAxis: {
        title: {
          text: 'ID',
        },
        accessibility: {
          // rangeDescription: 'Range: 2010 to 2017',
        },
        categories: this.myinput1,
      },

      legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle',
      },

      plotOptions: {
        series: {
          label: {
            connectorAllowed: false,
          },
          // pointStart: 2010,
        },
      },

      series: [
        {
          name: 'votes',
          data: this.myinput,
        },
      ],

      responsive: {
        rules: [
          {
            condition: {
              maxWidth: 500,
            },
            chartOptions: {
              legend: {
                layout: 'horizontal',
                align: 'center',
                verticalAlign: 'bottom',
              },
            },
          },
        ],
      },
    };
    // HC_exporting(Highcharts);
  }
}
