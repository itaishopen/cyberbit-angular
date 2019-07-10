import { Component, Input } from '@angular/core';
import {DataService} from '../services/data.service';

@Component({
  selector: 'app-time-period',
  templateUrl: './time-period.component.html',
  styleUrls: ['./time-period.component.scss']
})
export class TimePeriodComponent {
  @Input() data: any;
  @Input() input: string;
  selectedValue: any;
  constructor(private dataService: DataService) {
    this.selectedValue = [];
  }
  itemChange() {
  }

}
