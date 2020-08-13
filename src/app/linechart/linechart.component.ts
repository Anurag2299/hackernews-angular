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
  comment_count = [];
  id = [];
  Highcharts = Highcharts;
  temp1 = [
    75,
    409,
    60,
    144,
    68,
    302,
    47,
    167,
    38,
    41,
    48,
    52,
    43,
    23,
    113,
    29,
    12,
    59,
    11,
    28,
  ];

  @Input() myinput;
  constructor(private newsService: NewsService) {
    this.newsService.votes.subscribe((num) => {
      this.votes = num;
      console.log(this.votes);
      console.log('*************');
    });

    this.newsService.comment_count.subscribe((num1) => {
      this.comment_count = num1;
      console.log(this.comment_count);
      console.log('PPPPPPPPPPPPPrrrPPPP');
    });

    this.newsService.id.subscribe((num1) => {
      this.id = num1;
      // console.log(num1)
      // console.log("%%%%%%%%%%%%%%%%%%%%%")
    });

    // this.display()
    console.log('anurag');
  }

  ngOnChanges(changes: SimpleChanges) {
    // console.log(this.myinput);
    // console.log('qqqqqqqqqqqqqqqqqqqqqqqq');

    // this.votes=[]
    console.log(this.votes);
    console.log(this.comment_count);
    console.log(this.id);
    console.log('@@@@@@@@@@@@@@@@@@@');
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
        categories: this.id,
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
          // data: [43934, 52503, 687, 69658, 97031, 119931, 137133, 154175],
          data: this.votes,
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
    HC_exporting(Highcharts);

    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 300);
  }
}
