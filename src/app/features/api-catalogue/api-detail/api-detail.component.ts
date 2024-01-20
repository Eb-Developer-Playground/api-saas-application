import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Api } from 'src/app/models';
import { ApiService, RedocService } from 'src/app/services';

@Component({
  selector: 'app-api-detail',
  templateUrl: './api-detail.component.html',
  styleUrls: ['./api-detail.component.scss']
})
export class ApiDetailComponent implements OnInit, AfterViewInit {

  apiDetails: Api | undefined;
  swaggerFileUrl: string | undefined;
  constructor(private route: ActivatedRoute,
              private apiService: ApiService,
              private el: ElementRef,
              private redocService: RedocService) { }

  ngOnInit(): void {
    // + a unary operator in JavaScript that converts a string to a number
    const apiId = +this.route.snapshot.params['id'];

    this.apiService.getApiDetails(apiId).subscribe(api => {
      if(api){
        this.apiDetails = api;
        this.swaggerFileUrl = api.swaggerJsonFile as string;
      }

    });

        // Call the getApiDetails method from the service
        this.apiService.getApiDetails(apiId).subscribe(
          (details: Api | undefined) => {
            this.apiDetails = details;
          },
          (error) => {
            console.error('Error fetching API details:', error);
          }
        );
  }

  ngAfterViewInit(): void {
      this.loadAPiDocumentation();
  }

  loadAPiDocumentation(){
    if(this.swaggerFileUrl){
      const container = this.el.nativeElement.querySelector('#redoc');
      this.redocService.initDocs(this.swaggerFileUrl, {
        scrollYOffset: 60,
        hideDownloadButton: true
      }, container);
    }

  }
}