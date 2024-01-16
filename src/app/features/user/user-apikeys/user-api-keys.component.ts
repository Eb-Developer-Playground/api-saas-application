import { Component, OnInit, ViewChild } from '@angular/core';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { ApiKey } from 'src/app/models';

import { ApiKeyService } from 'src/app/services';

@Component({
  selector: 'app-user-api-keys',
  templateUrl: './user-api-keys.component.html',
  styleUrls: ['./user-api-keys.component.scss']
})
export class UserApiKeysComponent implements OnInit {
  displayedColumns: string[] = ['name', 'secretKey', 'tracking', 'created', 'lastUsed', 'actions'];
  dataSource = new MatTableDataSource<ApiKey>();
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  constructor(private apiKeyService: ApiKeyService) { }

  ngOnInit() {
    this.dataSource.data = this.apiKeyService.getAllApiKeys().reverse();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  editApiKey(apiKey: ApiKey): void {
    // Implement your edit logic here
    console.log('Edit clicked for:', apiKey);
  }


  deleteApiKey(apiKey: ApiKey): void {
    const apiKeyName = apiKey.name;
    this.apiKeyService.deleteApiKey(apiKeyName);
    this.dataSource.data = this.apiKeyService.getAllApiKeys();
  }
  
  generateApiKey(): void {
    const newApiKey: ApiKey = {
      name: 'New API Key', // Provide a default name or prompt the user for input
      secretKey: this.apiKeyService.generateApiKey(),
      tracking: false,
      created: new Date().toLocaleDateString(),
      lastUsed: 'Never',
    };

    this.apiKeyService.addApiKey(newApiKey);
    this.dataSource.data = this.apiKeyService.getAllApiKeys();
  }
  

}
