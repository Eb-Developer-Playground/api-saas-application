import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { Api } from 'src/app/models';

import { subscribedApisUserDummyData } from 'src/app/data';


@Component({
  selector: 'app-table-subscribed-api-cost',
  templateUrl: './table-subscribed-api-cost.component.html',
  styleUrls: ['./table-subscribed-api-cost.component.scss']
})
export class TableSubscribedApiCostComponent implements OnInit, AfterViewInit {
  subscribedAPIs: Api[] = subscribedApisUserDummyData;
  displayedColumns: string[] = ['name', 'description', 'subscriptionCost', 'generateApiKey'];
  subscribedAPIsDataSource!: MatTableDataSource<Api>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor() { }

  ngOnInit() {
    this.subscribedAPIsDataSource = new MatTableDataSource<Api>(this.subscribedAPIs);
  }

  ngAfterViewInit() {
    this.subscribedAPIsDataSource.paginator = this.paginator;
    this.subscribedAPIsDataSource.sort = this.sort;
  }

  generateApiKey(row: any){}


}
