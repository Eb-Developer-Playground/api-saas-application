import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { Chart } from 'chart.js/auto';
import { apiCatalogueDummyData, apiUsageDummyData } from 'src/app/data';

import { Api } from 'src/app/models';


@Component({
  selector: 'app-chart-api-usage',
  templateUrl: './user-api-usage.component.html',
  styleUrls: ['./user-api-usage.component.scss']
})
export class UserApiUsageComponent implements OnInit, AfterViewInit {
  overallApiUsage!: number;
  apiUsagePerUser!: number[];
  apiUsagePerApi = apiUsageDummyData;
  subscribedAPIs: Api[] = apiCatalogueDummyData;
  keyMetrics: { usageLimits: number, remainingQuota: number } = { usageLimits: 0, remainingQuota: 0 };
  isAuthenticated: boolean = true; //TODO:will replace with actual authentication logic

  @Input() userId: number = 1;

  @ViewChild('usageChart') usageChart!: ElementRef;
  @ViewChild('apiMetricsChart1') chart1Canvas!: ElementRef;
  @ViewChild('apiMetricsChart2') chart2Canvas!: ElementRef;
  @ViewChild('apiMetricsChart3') chart3Canvas!: ElementRef;
  @ViewChild('apiMetricsChart4') chart4Canvas!: ElementRef;

  displayedColumns: string[] = ['name', 'category', 'description', 'usageGuide', 'features', 'pricingPlan'];
  subscribedAPIsDataSource!: MatTableDataSource<Api>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor() { }

  ngOnInit(): void {
    this.subscribedAPIsDataSource = new MatTableDataSource<Api>(this.subscribedAPIs);
    this.subscribedAPIsDataSource.paginator = this.paginator;
    this.subscribedAPIsDataSource.sort = this.sort;
  }

  ngAfterViewInit(): void {
    if (this.isAuthenticated) {
      this.createChart(this.chart1Canvas, 'Request Count (Requests)', 'rgba(75, 192, 192, 0.2)', 'rgba(75, 192, 192, 1)', this.apiUsagePerApi.map(entry => entry.requestCount));
      this.createChart(this.chart2Canvas, 'Traffic Volume (MB)', 'rgba(255, 99, 132, 0.2)', 'rgba(255, 99, 132, 1)', this.apiUsagePerApi.map(entry => entry.trafficVolume));
      this.createChart(this.chart3Canvas, 'Response Time (ms)', 'rgba(255, 206, 86, 0.2)', 'rgba(255, 206, 86, 1)', this.apiUsagePerApi.map(entry => entry.responseTime));
      this.createChart(this.chart4Canvas, 'Error Rates (%)', 'rgba(255, 69, 0, 0.2)', 'rgba(255, 69, 0, 1)', this.apiUsagePerApi.map(entry => entry.errorRate));
      

    }
  }

  createChart(canvasRef: ElementRef, label: string, backgroundColor: string, borderColor: string, data: number[]): void {
    const ctx = canvasRef.nativeElement.getContext('2d');
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: this.apiUsagePerApi.map(entry => entry.apiName),
        datasets: [
          {
            label: label,
            data: data,
            backgroundColor: backgroundColor,
            borderColor: borderColor,
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: label,
            },
          },
          x: {
            title: {
              display: true,
              text: 'APIs',
            },
          },
        },
        responsive: true,
      },
    });
  }
}
