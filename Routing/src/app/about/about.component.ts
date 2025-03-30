import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {LocalstorageService} from '../../services/localstorage.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})

export class AboutComponent {

  constructor(private localStorage : LocalstorageService){}

  key !: string;
  value !: string;

  setItem() {
    this.localStorage.set(this.key, this.value)
  }
}
