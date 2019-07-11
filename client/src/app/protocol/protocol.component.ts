import { Component, ViewChildren, QueryList, ElementRef, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-protocol',
  templateUrl: './protocol.component.html',
  styleUrls: ['./protocol.component.scss']
})
export class ProtocolComponent {
  @ViewChildren("checkboxes") checkboxes: QueryList<ElementRef>;
  @Input() protocols: any;
  @Input() checkAll: any;
  @Input() input: string;
  @Output() protocolUpdate = new EventEmitter();
  @Output() checkUpdate = new EventEmitter();
  
  constructor() {
  }
  protocolChange(protocol) {
    this.checkUpdate.emit(this.checkboxes);
    this.protocolUpdate.emit(protocol);
  }

}
