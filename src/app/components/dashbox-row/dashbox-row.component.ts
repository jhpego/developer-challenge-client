import { Component, Input, OnInit } from '@angular/core';
import { DashboardRow } from 'src/models/Shared.model';
import {MatBadgeModule} from '@angular/material/badge';

@Component({
  selector: 'dashbox-row',
  templateUrl: './dashbox-row.component.html',
  styleUrls: ['./dashbox-row.component.scss']
})
export class DashboxRowComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() row:DashboardRow;
  

}
