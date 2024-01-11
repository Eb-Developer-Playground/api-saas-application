import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { apiKeyList } from 'src/app/data/api-keys-list';

import { ApiKey } from 'src/app/models';

@Component({
  selector: 'app-user-api-keys',
  templateUrl: './user-api-keys.component.html',
  styleUrls: ['./user-api-keys.component.scss']
})
export class UserApiKeysComponent implements OnInit {
  displayedColumns: string[] = ['name', 'secretKey', 'tracking', 'created', 'lastUsed', 'actions'];
  dataSource = new MatTableDataSource(apiKeyList);
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  editApiKey(apiKey: ApiKey): void {
    // Implement your edit logic here
    console.log('Edit clicked for:', apiKey);
  }

  deleteApiKey(apiKey: ApiKey): void {
    // Implement your delete logic here
    console.log('Delete clicked for:', apiKey);
  }

}
