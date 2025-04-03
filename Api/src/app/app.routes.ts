import { Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';
import {ErrorComponent} from './error/error.component';

export const routes: Routes = [
  {path: "", redirectTo: "users", pathMatch: "full"},

  {path: "users", component: UsersComponent},
  {path: "user/:id", component: UserComponent},

  {path: "**", component: ErrorComponent}
];
