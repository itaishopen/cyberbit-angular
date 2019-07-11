import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public formData;
  constructor(private dataService: DataService) {
    this.dataService.getData().subscribe(
      (data) => {
        this.formData = data;
        this.formData.device_groups.forEach((group) => {
          group.active = (group.devices.length === group.devices.filter(device => device.active === 1 || device.active === true).length) ? true : false;
        });
      },
      (err) => {
        console.error(err);
      });
  }
  public selectedValues = {
    devices: [],
    protocols: [],
    times: 0,
  };
  checkboxes;
  radioboxes;
  ngOnInit() {
    this.dataService.getData().subscribe(
      (data) => {
        this.formData = data;
        this.selectedValues.devices = [];
        this.formData.device_groups.forEach((group) => {
          group.active = (group.devices.length === group.devices.filter(device => device.active === 1 || device.active === true).length) ? true : false;
          this.selectedValues.devices.push(...group.devices.filter(device => device.active === 1 || device.active === true).map(el => el));
        });
      },
      (err) => {
        console.error(err);
      });
  }
  groupsChange(groups) {
    this.selectedValues.devices = [];
    groups.forEach((group) => {
      this.selectedValues.devices.push(...group.devices.filter(x => x.active).map(el => el));
    });
  }
  timeChange(time) {
    this.selectedValues.times = time
  }
  protocolChange(protocol) {
    let index = this.selectedValues.protocols.findIndex(el => el.id === protocol.id)
    if (index !== -1) this.selectedValues.protocols.splice(index, 1)
    else this.selectedValues.protocols.push(protocol)
    this.selectedValues.protocols.sort((a, b) => a.id - b.id)
  }
  clear() {
    if (this.checkboxes) this.checkBoxRemoval(this.checkboxes)
    if (this.radioboxes) this.checkBoxRemoval(this.radioboxes);
    this.selectedValues = {
      devices: [],
      protocols: [],
      times: 0,
    }
    this.formData.device_groups.forEach((group) => {
      group.devices.forEach(device => device.active = false)
      group.active = false;
    });
  }
  checkBoxUpdate(checkbox) {
    this.checkboxes = checkbox
  }
  radioBoxUpdate(radiobox) {
    this.radioboxes = radiobox
  }
  checkBoxRemoval(items) {
    items.forEach((el) => {
      el.nativeElement.checked = false;
    });
  }

}