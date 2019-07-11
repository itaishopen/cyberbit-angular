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

  getData() {
    return this.http.get(URL);
  }
}
