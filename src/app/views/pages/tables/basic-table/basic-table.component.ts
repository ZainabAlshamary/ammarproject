import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-table',
  templateUrl: './basic-table.component.html',
  styleUrls: ['./basic-table.component.scss'],
})
export class BasicTableComponent implements OnInit {
  dataTable = [
    {
      id: 1,
      fullName: ' Hasaneeen',
    },
    {
      id: 2,
      fullName: ' Hasaneeen',
    },
    {
      id: 3,
      fullName: ' Hasaneeen',
    },
    {
      id: 4,
      fullName: ' Hasaneeen',
    },
    {
      id: 5,
      fullName: ' Hasaneeen',
    },
    {
      id: 6,
      fullName: ' Hasaneeen',
    },
    {
      id: 7,
      fullName: ' Hasaneeen',
    },
    {
      id: 8,
      fullName: ' Hasaneeen',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
