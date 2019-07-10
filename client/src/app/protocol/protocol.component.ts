import { Component, Input } from '@angular/core';
import {DataService} from '../services/data.service';

@Component({
  selector: 'app-protocol',
  templateUrl: './protocol.component.html',
  styleUrls: ['./protocol.component.scss']
})
export class ProtocolComponent {
  @Input() data: any;
  @Input() input: string;
  selectedValue: any;
  constructor(private dataService: DataService) {
    this.selectedValue = [];
  }
  itemChange() {
  }

}
