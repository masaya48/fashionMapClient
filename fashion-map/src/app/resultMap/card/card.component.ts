import { Component } from '@angular/core';
import { MdDialog } from '@angular/material';
import { ModalComponent } from '../../detail/modal/modal.component';

@Component({
  selector: 'card-component',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  constructor(public dialog: MdDialog) {}

  openDialog() {
    this.dialog.open(ModalComponent);
  }
}