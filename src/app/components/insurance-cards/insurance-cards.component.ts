import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-insurance-cards',
  templateUrl: './insurance-cards.component.html',
  styleUrls: ['./insurance-cards.component.scss']
})
export class InsuranceCardsComponent implements OnInit {

  cardWithImage = true;
  imageUrl = 'assets/info.svg';

  constructor() { }

  ngOnInit(): void {
  }

}
