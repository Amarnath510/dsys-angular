import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() type: string = 'primary';
  @Input() size: string = 'sm';
  @Input() hasBorderRadius: boolean = true;
  @Input() title: string = 'N/A';
  @Output() btnClicked = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }
}
