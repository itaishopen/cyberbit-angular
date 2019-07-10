import { Component, EventEmitter, Output } from '@angular/core';
import {DataService} from '../services/data.service';

@Component({
  selector: 'app-blackbox',
  templateUrl: './blackbox.component.html',
  styleUrls: ['./blackbox.component.scss']
})
export class BlackboxComponent {
  @Output() onChange = new EventEmitter();
  groupsChecked = [];
  constructor(private dataService: DataService) {
    if (this.dataService.formData.device_groups && this.dataService.formData.device_groups.length) {
      this.groupsCheck();
      };
  }
  itemChange(id, active) {
    this.groupsChecked = [];
    this.dataService.formData.device_groups.forEach((group) => {
      if (group.devices.filter(el => el.id === id).length) {
        group.devices.filter(el => el.id === id)[0].active = (active ? 1 : 0);
        this.dataService.updateData();
      }
      if (group.devices.length === group.devices.filter(el => el.active === 1 || el.active === true).length) {
        this.groupsChecked.push(true);
      } else {
        this.groupsChecked.push(false);
      }
    });
    this.onChange.emit();
  }
  checkSection(index) {
    if (this.groupsChecked[index]) {
      this.dataService.formData.device_groups[index].devices.forEach( el => el.active = false);
    } else {
      this.dataService.formData.device_groups[index].devices.forEach( el => el.active = true);
    }
    this.onChange.emit();
  }
  groupsCheck() {
    this.dataService.formData.device_groups.forEach((group) => {
      if (group.devices.length === group.devices.filter(el => el.active === 1).length) this.groupsChecked.push(true);
      this.groupsChecked.push(false);
    });
  }
}
