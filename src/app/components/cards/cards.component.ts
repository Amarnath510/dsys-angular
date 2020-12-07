import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  readonly DEF_CONTENT = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum nulla nostrum perspiciatis aspernatur quis at?';

  hasCardImage = true;
  cardImageSetting = 'yes';
  title = '';
  btnLabel = '';
  content = '';

  constructor() { }

  ngOnInit(): void {
  }

}
