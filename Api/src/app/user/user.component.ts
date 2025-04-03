import { Component } from '@angular/core';
import {ActivatedRoute, RouterModule} from '@angular/router';
import {UsersService} from '../../services/users/users.service';
import {User} from '../../models/user';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {

  constructor(
    private route : ActivatedRoute,
    private UsersService : UsersService
  ){}

  id! : number

  user! : User
  user$! : Observable<any>

  ngOnInit(){
    this.id = this.route.snapshot.params['id']

    this.user$ = this.UsersService.getUser(this.id)

    this.user$.subscribe(resp => this.user = resp.data)
  }

}
