import {Component, OnInit} from '@angular/core';
import {DataService} from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private dataService: DataService) {
    this.dataService.getData().subscribe((data) => {
      this.dataService.formData = data;
    });
  }
  ngOnInit() {
    this.dataService.getData().subscribe(
      (data) => {
        this.dataService.formData = data;
        this.dataService.formData.device_groups.forEach((group, i) => {
          this.dataService.selectedValues.devices.push( ...group.devices.filter(x => x.active).map(el => el.id));
        });
        this.dataService.formData.protocols.forEach(el => {
          this.dataService.selectedValues.protocols.push(false);
        });
      },
      (err) => {
        console.error(err);
      }
    );
  }
  devicesChanged() {
    this.dataService.selectedValues.devices = [];
    this.dataService.formData.device_groups.forEach((group, i) => {
      this.dataService.selectedValues.devices.push( ...group.devices.filter(x => x.active).map(el => el.id));
    });
  }
}