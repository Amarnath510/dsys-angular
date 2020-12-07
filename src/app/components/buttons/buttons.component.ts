import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {

  size = 'small';
  type = 'primary';
  hasBorderRadius = true;

  constructor() { }

  ngOnInit(): void {
  }

  btnClick(): void {
    alert('Button Clicked');
  }

}
