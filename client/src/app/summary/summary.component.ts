import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../services/data.service';
// import { BlackboxComponent } from '../blackbox/blackbox.component'

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {
  @Input() summary: any;
  constructor(private dataService: DataService) { }
  ngOnInit() {
  }
  sendRequest() {
    var pathArray = location.href.split('/');
    var protocol = pathArray[0];
    var host = pathArray[2];
    var url = protocol + '//' + host + '?devices=' + this.summary.devices + '&protocol=' + this.getSelectedProtocols() + '&times=' + this.summary.times;
    window.location.href = url;
  }
  getSelectedProtocols() {
    let protocolsString = '';
    this.summary.protocols.forEach((pro, index) => {
      if (pro) {
        if (protocolsString === '') {
          protocolsString += index + 1;
        } else {
          protocolsString += ',' + (index + 1);
        }
      }
    });
    return protocolsString;
  }
  getDeviceName(id) {
    let name = '';
    this.dataService.formData.device_groups.forEach((group) => {
      group.devices.forEach((el => {
        if (el.id === id) {
          name = el.name;
        }
      }));
    });
    return name;
  }
  getProtocolName(index) {
    return this.dataService.formData.protocols[index].name;
  }
  getTimes(index) {
    return this.dataService.formData.times.filter(el => el.id === index)[0].name;
  }
  clear() {
    this.dataService.clearData();
    // this.blackBox.groupsCheck();
  }

}
