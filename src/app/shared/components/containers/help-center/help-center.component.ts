import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-help-center',
  templateUrl: './help-center.component.html',
  styleUrls: ['./help-center.component.scss']
})
export class HelpCenterComponent implements OnInit {

  resources = [
    {
      title: 'Answers to FAQs',
      description: 'Frequently asked account and billing questions.',
      link: '/help/faq',
      linkText: 'Help Center',
    },
    {
      title: 'Developer Forum',
      description: 'Ask questions and discuss topics with other developers.',
      link: '/forum',
      linkText: 'Developer Forum',
    },
    {
      title: 'Service Status',
      description: 'Check the status of OpenAI services.',
      link: '/status',
      linkText: 'Status Page',
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
