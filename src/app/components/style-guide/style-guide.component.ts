import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

export enum StyleTypes {
  BUTTON = 'BUTTON',
  DROPDOWN = 'DROPDOWN',
  CARD = 'CARD',
  INSURANCE_CARDS =  'INSURANCE_CARDS',
  INPUT = 'INPUT'
}

@Component({
  selector: 'app-style-guide',
  templateUrl: './style-guide.component.html',
  styleUrls: ['./style-guide.component.scss']
})
export class StyleGuideComponent implements OnInit {

  readonly StyleTypes = StyleTypes;

  styleType: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      const chosenType = ((params.type || StyleTypes.BUTTON) as string).toUpperCase();
      this.styleType = chosenType;
    });
  }

}
