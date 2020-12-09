import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-insurance-card',
  templateUrl: './insurance-card.component.html',
  styleUrls: ['./insurance-card.component.scss']
})
export class InsuranceCardComponent implements OnInit {

  @Input() hasInsuranceCardImage = true;
  @Input() imageUrl: string;

  constructor() { }

  ngOnInit(): void {
  }

  uploadCard(): void {
    alert('Open file explorer and select a card to upload');
  }

}
