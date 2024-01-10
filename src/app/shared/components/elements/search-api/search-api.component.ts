import { AfterViewInit, Component, EventEmitter, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSelect} from '@angular/material/select';

import { ReplaySubject, Subject, take, takeUntil } from 'rxjs';

import { Api } from 'src/app/models';
import { ApiService } from 'src/app/services';

@Component({
  selector: 'app-search-api',
  templateUrl: './search-api.component.html',
  styleUrls: ['./search-api.component.scss']
})
export class SearchApiComponent implements OnInit, AfterViewInit, OnDestroy {

  searchQuery: string = '';
  /** list of apis  */
  apis: any[] = [];
  filteredAPIs: any[] = [];

  /** control for the selected API */
  public apiCtrl: FormControl<Api> = new FormControl();

  /** control for the MatSelect filter keyword */
  public apiFilterCtrl: FormControl<string> = new FormControl();


  /** list of APIs filtered by search keyword */
  public filteredApis: ReplaySubject<Api[]> = new ReplaySubject<Api[]>(1);

  /** Subject that emits when the component has been destroyed. */
  protected _onDestroy = new Subject<void>();


  @ViewChild('singleSelect', { static: true }) singleSelect: MatSelect;

  @Output() filteredAPIsChange: EventEmitter<any[]> = new EventEmitter<any[]>();

  constructor(private apiService: ApiService) {
    this.singleSelect = {} as MatSelect; // Initialize with a default value if necessary
  }

  ngOnInit(): void {
    // Get API Data from API service
    this.apiService.getDummyAPIs().subscribe(data => {
      this.apis = data;
      this.filteredAPIs = this.apis;
      this.emitFilteredResults();
    });


    // set initial selection
    this.apiCtrl.setValue(this.apis[10]);

    // load the initial api list
    this.filteredApis.next(this.apis.slice());


    // listen for search field value changes
    this.apiFilterCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterApis();
      });
  }

  ngAfterViewInit() {
    this.setInitialValue();
  }

  ngOnDestroy() {
    this._onDestroy.next();
    this._onDestroy.complete();
  }


  /*Perform actions or emit the selected value as needed*/
  onAPISelected(event: any): void {
    this.filteredAPIsChange.emit([event.value as Api]);
  }

  /**
 * Sets the initial value after the filteredAPIs are loaded initially
 */
  protected setInitialValue() {
    this.filteredApis
      .pipe(take(1), takeUntil(this._onDestroy))
      .subscribe(() => {
        // setting the compareWith property to a comparison function
        // triggers initializing the selection according to the initial value of
        // the form control (i.e. _initializeSelection())
        // this needs to be done after the filteredAPIs are loaded initially
        // and after the mat-option elements are available
        this.singleSelect.compareWith = (a: Api, b: Api) => a && b && a.id === b.id;
      });
  }


  protected filterApis() {
    if (!this.apis) {
      return;
    }
    // get the search keyword
    let search = this.apiFilterCtrl.value;
    if (!search) {
      this.filteredApis.next(this.apis.slice());
      return;
    } else {
      search = search.toLowerCase();
    }
    // filter the apis
    this.filteredApis.next(
      this.apis.filter(api => api.name.toLowerCase().indexOf(search) > -1)
    );


    // Emit the filtered results whenever it changes
    this.emitFilteredResults();
  }


  emitFilteredResults(): void {
    this.filteredAPIsChange.emit(this.filteredAPIs);
  }

}
