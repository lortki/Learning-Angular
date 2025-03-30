import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { Student } from '../../modes/student';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() student !: Student;
  @Input() index !: number;

  @Output() deleteEvent = new EventEmitter<number>()
  @Output() editEvent = new EventEmitter<number>()

  deleteCard() {
    this.deleteEvent.emit(this.index)
  }

  editCard() {
    this.editEvent.emit(this.index)
  }
}
