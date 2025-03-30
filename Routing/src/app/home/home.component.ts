import { Component } from '@angular/core';
import { Student } from '../../modes/student';
import { DisplayDataComponent } from '../display-data/display-data.component';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [DisplayDataComponent, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent {

  student : Student = {
    name: '',
    age: null,
    grade: '',
    subjects: '',
    isEnrolled: false,
    address: {
      street: '',
      city: '',
      zip: ''
    }
  }

  students : Student[] = []

  resetStudent() {
    this.student.name = ''
    this.student.age = null
    this.student.grade = ''
    this.student.subjects = ''
    this.student.isEnrolled = false
    this.student.address.city = ''
    this.student.address.street = ''
    this.student.address.zip = ''
  }

  addStudent() {
    this.students.push({ ...this.student });
    this.resetStudent()
  }

  deleteCard(index: number) {
    this.students.splice(index, 1)
  }

  editCard(index: number) {
    this.student = this.students[index]
    this.deleteCard(index)
  }
}
