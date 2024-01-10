import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-api-catalogue-list',
  templateUrl: './api-catalogue-list.component.html',
  styleUrls: ['./api-catalogue-list.component.scss']
})
export class ApiCatalogueListComponent implements OnInit {

  filteredAPIs: any[] = [];

  constructor() { }

  ngOnInit(): void {

  }


  onFilteredAPIsChange(filteredAPIs: any[]): void {
    this.filteredAPIs = filteredAPIs;
  }



  viewDetails(apiID: number){
  //TODO: Logic to navigate or display detailed information for the selected API
  // We use the apiId to fetch specific API details
  }

  tryApi(apiID: number){
  //TODO:Logic to handle trying out the selected API
  // We use the apiId to perform actions related to this specific API
  }

}