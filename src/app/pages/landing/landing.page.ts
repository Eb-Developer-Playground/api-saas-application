import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss']
})
export class LandingPage implements OnInit {
  title = 'Home';
  constructor(private titleService: Title) { 
    this.titleService.setTitle($localize `${this.title}`)
  }

  ngOnInit() {
  }

}
