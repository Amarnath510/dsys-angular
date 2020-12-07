import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() title;
  @Input() hasCardImage = true;
  @Input() isRoundedCard = true;
  @Input() imageUrl = 'invalid-url';
  @Input() btnLabel;
  @Input() content;

  constructor() { }

  ngOnInit(): void {
  }

  cardClicked(): void {
    alert('Card Details');
  }

}
