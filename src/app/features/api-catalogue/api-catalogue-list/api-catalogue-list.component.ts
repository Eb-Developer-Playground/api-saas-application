import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-api-catalogue-list',
  templateUrl: './api-catalogue-list.component.html',
  styleUrls: ['./api-catalogue-list.component.scss']
})
export class ApiCatalogueListComponent implements OnInit {

  filteredAPIs: any[] = [];

  constructor(private router: Router) { }

  ngOnInit(): void {

  }


  onFilteredAPIsChange(filteredAPIs: any[]): void {
    this.filteredAPIs = filteredAPIs;
  }



  viewDetails(apiID: number){
    // Navigate to the detailed view using the API ID
    this.router.navigate(['/apis/detail', apiID]);
  }

  tryApi(apiID: number){
  //TODO:Logic to handle trying out the selected API
  // We use the apiId to perform actions related to this specific API
  }

}