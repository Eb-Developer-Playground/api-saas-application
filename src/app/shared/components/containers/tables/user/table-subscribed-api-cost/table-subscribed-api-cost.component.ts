import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { Api } from 'src/app/models';

import { subscribedApisUserDummyData } from 'src/app/data';

import { AlertService } from 'src/app/services';


@Component({
  selector: 'app-table-subscribed-api-cost',
  templateUrl: './table-subscribed-api-cost.component.html',
  styleUrls: ['./table-subscribed-api-cost.component.scss']
})
export class TableSubscribedApiCostComponent implements OnInit, AfterViewInit {
  subscribedAPIs: Api[] = subscribedApisUserDummyData;
  displayedColumns: string[] = ['name', 'description', 'subscriptionCost', 'payment'];
  subscribedAPIsDataSource!: MatTableDataSource<Api>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  totalCost: number = 0;
  constructor(private alertServce: AlertService) { }

  ngOnInit() {
    this.subscribedAPIsDataSource = new MatTableDataSource<Api>(this.subscribedAPIs);
  }

  ngAfterViewInit() {
    this.subscribedAPIsDataSource.paginator = this.paginator;
    this.subscribedAPIsDataSource.sort = this.sort;
  }
  
  // Make payment for the total cost
  makePayment(row: any) {
    // Implement the logic to make the total payment
    // You can use this.subscribedAPIsDataSource.data to access the list of subscribed APIs
    // console.log('Making total payment. Total cost:', this.totalCost);
    this.alertServce.success('Payment Successful')
  }

  // Calculate the total cost
  calculateTotalCost() {
    this.totalCost = this.subscribedAPIsDataSource.data.reduce((total, api) => total + 0, 0);
  }


}
