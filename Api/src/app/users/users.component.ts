import {Observable} from 'rxjs';
import {User} from '../../models/user';
import {UsersService} from '../../services/users/users.service';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})

export class UsersComponent {

  constructor(private userService : UsersService){}

  users : User[] = []

  users$ ?: Observable<any>

  ngOnInit(){
    this.users$ = this.userService.getUsers()
    this.users$.subscribe(resp => this.users = resp.data)
  }

}
