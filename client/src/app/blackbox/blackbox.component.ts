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
      if (group.devices.length === group.devices.filter(device => device.active === 1 || device.active === true).length) {
        group.active = true;
      } else {
        group.active = false;
      }
      this.groupsActive[group.id - 1] = group.active
    });
    this.deviceUpdate.emit(this.groups);
  }
  checkSection(index, value) {
    let check = (value === this.groupsActive[index]) ? !value : value;
    if (check === 1 || check === true) {
      this.groups[index].devices.forEach( device => device.active = true);
    } else {
      this.groups[index].devices.forEach( device => device.active = false);
    }
    this.groupsActive[index] = !this.groupsActive[index]
    this.deviceUpdate.emit(this.groups);
  }
  groupsCheck() {
    this.groups.forEach((group) => {
      if (group.devices.length === group.devices.filter(device => device.active === 1 || device.active === true).length) {
        group.active = true;
      }
      else group.active = false;
      this.groupsActive[group.id - 1] = group.active
    });
  }
}
