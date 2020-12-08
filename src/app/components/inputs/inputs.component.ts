import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.scss']
})
export class InputsComponent implements OnInit {

  title: string;
  type: string;
  size: string;
  content: string;
  placeholder: string;

  constructor() { }

  ngOnInit(): void {
  }

  updateContent(newContent): void {
    this.content = newContent;
  }

}
