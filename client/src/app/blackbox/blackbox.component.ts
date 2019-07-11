import { Component, EventEmitter, Output, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-blackbox',
  templateUrl: './blackbox.component.html',
  styleUrls: ['./blackbox.component.scss']
})
export class BlackboxComponent implements OnInit {
  @Input() groups: any;
  @Output() deviceUpdate = new EventEmitter();
  constructor() {
    if (this.groups && this.groups.length) {
      this.groupsCheck();
      };
  }
  ngOnInit() {
    if (this.groups && this.groups.length) {
      this.groupsCheck();
      };
  }
  groupsActive = [];
  deviceChange(id, active) {
    this.groups.forEach((group) => {
      if (group.devices.filter(device => device.id === id).length) {
        group.devices.filter(device => device.id === id).active = (active ? 1 : 0);
      }
      group.active = (group.devices.length === group.devices.filter(device => device.active === 1 || device.active === true).length) ? true : false
      this.groupsActive[group.id - 1] = group.active
    });
    this.deviceUpdate.emit(this.groups);
  }
  checkSection(index, value) {
    // IE is a lot more faster then chrome so I can not rely on this.groups[index].active or on value this is a simple test so the app can work on IE and chrome
    let check = (value === this.groupsActive[index]) ? !value : value; 
    this.groups[index].devices.forEach( device => device.active = (check === 1 || check === true));
    this.groupsActive[index] = !this.groupsActive[index]
    this.deviceUpdate.emit(this.groups);
  }
  groupsCheck() {
    this.groups.forEach((group) => {
      group.active = (group.devices.length === group.devices.filter(device => device.active === 1 || device.active === true).length) ? true : false
      this.groupsActive[group.id - 1] = group.active
    });
  }
}
