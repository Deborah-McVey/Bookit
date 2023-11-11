import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent {

  @Input() alertMsg: string;

  @Output() closeModal = new EventEmitter<void>();

  closeModal() {
    this.closeModal.emit();
  }
}
