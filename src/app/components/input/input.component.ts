import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  readonly sizeMap = {
    small: 20,
    medium: 40,
    large: 60
  };

  @Input() title: string;
  @Input() type: string;
  @Input() size: string;
  @Input() content = '';
  @Input() placeholder: string;
  @Input() showLabel = true;
  @Output() contentUpdated = new EventEmitter<string>();

  maxLength: number;

  constructor() { }

  ngOnInit(): void {
    console.log('title = ', this.title);
    this.size = this.size || 'small';
    this.maxLength = this.sizeMap[this.size];
  }

  updateContent(): void {
    this.contentUpdated.emit(this.content);
  }

}
