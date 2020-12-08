import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

  @Input() title: string;
  @Input() selectedOption: string;
  @Input() options: string[] = [];
  @Input() showLabel = true;
  @Output() updateOption = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
    // this.updateOption.emit(this.selectedOption);
  }

  changeOption(): void {
    this.updateOption.emit(this.selectedOption);
  }

}
