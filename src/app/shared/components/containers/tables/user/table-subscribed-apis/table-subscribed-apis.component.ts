import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { Api } from 'src/app/models';

import { subscribedApisUserDummyData } from 'src/app/data';
import { ModalService } from 'src/app/services/ui/modal.service';
import { ApiKeyService } from 'src/app/services';
import { ApiKeyFormComponent } from 'src/app/shared/components/blocks/forms/api-key-form/api-key-form.component';


@Component({
  selector: 'app-table-subscribed-user-apis',
  templateUrl: './table-subscribed-apis.component.html',
  styleUrls: ['./table-subscribed-apis.component.scss']
})
export class TableSubscribedApisComponent implements OnInit, AfterViewInit {
  subscribedAPIs: Api[] = subscribedApisUserDummyData;
  displayedColumns: string[] = ['name', 'description', 'generateApiKey'];
  subscribedAPIsDataSource!: MatTableDataSource<Api>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private modalService: ModalService, private apiKeyService: ApiKeyService) { }

  ngOnInit() {
    this.subscribedAPIsDataSource = new MatTableDataSource<Api>(this.subscribedAPIs);
  }

  ngAfterViewInit() {
    this.subscribedAPIsDataSource.paginator = this.paginator;
    this.subscribedAPIsDataSource.sort = this.sort;
  }

  openApiKeyModal(row: any): void {
    const apiKey = this.apiKeyService.generateApiKey();
    row.apiKey = apiKey;

    const config = {
      data: { row, apiKey },
      width: '400px',
    };

    this.modalService.openModal(ApiKeyFormComponent, config).subscribe(result => {
      console.log('Modal closed with result:', result);
    });


  }
}
