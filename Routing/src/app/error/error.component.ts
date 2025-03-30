import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error',
  standalone: true,
  imports: [],
  templateUrl: './error.component.html',
  styleUrl: './error.component.scss'
})

export class ErrorComponent {

  constructor(private router: Router) {}

  toHome(){
    this.router.navigate(['home'])
  }

}
