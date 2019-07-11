import { Component, ViewChildren, QueryList, ElementRef, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-time-period',
  templateUrl: './time-period.component.html',
  styleUrls: ['./time-period.component.scss']
})
export class TimePeriodComponent {
  @ViewChildren("radioboxes") radioboxes: QueryList<ElementRef>;
  @Input() times: any;
  @Input() input: string;
  @Output() timeUpdate = new EventEmitter();
  @Output() radioUpdate = new EventEmitter();
  constructor() {
  }
  timeChange(time) {    
    this.radioUpdate.emit(this.radioboxes)
    this.timeUpdate.emit(time)
  }
}
