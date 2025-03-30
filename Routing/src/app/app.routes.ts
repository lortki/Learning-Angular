import { Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {ErrorComponent} from './error/error.component';

export const routes: Routes = [
  {path: "", redirectTo: "home", pathMatch: "full"},
  {path: "**", component: ErrorComponent},
  {path: "home", component: HomeComponent},
  {path: "aboutMe", component: AboutComponent},
];
