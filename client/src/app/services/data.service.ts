import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

const URL = '//localhost:3000/api/app';

@Injectable({ providedIn: 'root' })
export class DataService {
  public formData;
  constructor(private http: HttpClient, private router: Router) {
    this.getData();
  }
  public selectedValues = {
    devices: [],
    protocols: [],
    times: 0,
  };
  getData() {
    return this.http.get(URL);
  }
  public updateData() {
    return this.http.put(URL, JSON.stringify(this.formData))
  }
  clearData() {
    this.formData.device_groups.forEach((group) => group.devices.forEach((device) => device.active = 0));
    this.selectedValues = {
      devices: [],
      protocols: [],
      times: 0,
    };
  }
}
