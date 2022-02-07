import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-cards',
  templateUrl: './all-cards.component.html',
  styleUrls: ['./all-cards.component.scss']
})
export class AllCardsComponent implements OnInit {
  simpleItems: string[];
  selectedSimpleItem: any = null;

  constructor() { }

  ngOnInit() {
    this.simpleItems = [  '($5) كوكل بلي امريكي (10$)', 'كوكل بلي امريكي'];

  }

}
