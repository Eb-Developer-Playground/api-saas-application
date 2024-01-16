import { Component, OnInit } from '@angular/core';

import { User } from 'src/app/models';

import { AccountService, CacheService } from 'src/app/services';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  currentUser: User | undefined;
  constructor(private accountService: AccountService,
                private cacheService: CacheService) { }
  ngOnInit() {
        this.currentUser = this.cacheService.get('user');

  }

  openEditDialog(){}

  deleteAccount(){}


}
