import { Component, EventEmitter, Output, Input } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent {
  @Input() summary: any;
  @Output() clearForm = new EventEmitter();
  constructor(private router: Router) { }
  sendRequest() {
    var pathArray = location.href.split('/');
    var protocol = pathArray[0];
    var host = pathArray[2];
    var url = protocol + '//' + host + '?devices=' + this.getSelected(this.summary.devices) + '&protocol=' + this.getSelected(this.summary.protocols) + '&times=' + this.summary.times.id;
    window.location.href = url;
  }
  getSelected(items) {
    let itemsString = '';
    items.forEach((item) => {
      itemsString += (itemsString === '') ? '' : ',';
      itemsString += item.id
    });
    return itemsString;
  }
  
  clear() {
    this.clearForm.emit(null)
  }

}
