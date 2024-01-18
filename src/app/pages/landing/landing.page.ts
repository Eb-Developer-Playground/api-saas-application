import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss']
})
export class LandingPage implements OnInit {
  title = 'Home';
  constructor(
              // private titleService: Title,
              private router: Router,
              private accountService: AccountService) { 
    // this.titleService.setTitle($localize `${this.title}`)


    // redirect to home if already logged in
    if (this.accountService.userValue) {
        this.router.navigate(['/dashboard']);
    }
  }

  ngOnInit() {
  }

}
