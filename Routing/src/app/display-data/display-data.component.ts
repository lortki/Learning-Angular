import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Student } from '../../models/student';
import {CommonModule} from '@angular/common';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-display-data',
  standalone: true,
  imports: [CommonModule, CardComponent, CardComponent],
  templateUrl: './display-data.component.html',
  styleUrl: './display-data.component.scss'
})
export class DisplayDataComponent {
  @Input() students : Student[] = []

  @Output() deleteEvent = new EventEmitter<number>()
  @Output() editEvent = new EventEmitter<number>()

  deleteCard(index:number) {
    this.deleteEvent.emit(index)
  }

  editCard(index:number) {
    this.editEvent.emit(index)
  }
}
