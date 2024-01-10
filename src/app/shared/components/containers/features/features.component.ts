import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {

  apis = [
    {
      title: 'Transaction APIs',
      description: 'Access real-time transaction data and history.',
    },
    {
      title: 'Account Management APIs',
      description: 'Manage accounts, balances, and transactions.',
    },
    {
      title: 'Payment APIs',
      description: 'Initiate and manage payments efficiently.',
    },
  ];

  constructor() { }

  ngOnInit() {
  }


}
