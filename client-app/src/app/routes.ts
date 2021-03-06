import {Routes} from '@angular/router';
import {LoginComponent} from './pages/login/login.component';
import {RegisterComponent} from "./pages/register/register.component";
import {TeamListComponent} from "./pages/team-list/team-list.component";
import {CreateTeamComponent} from "./pages/create-team/create-team.component";
import {RouteGuard} from "./route.guard";
import { TeamComponent } from './pages/team/team.component';

export const appRoutes: Routes = [
{
    path:'',
    canActivateChild: [RouteGuard],
    children:[
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'teams', component: TeamListComponent},
  {path: 'teams/:id', component: TeamComponent},
  {path: 'create', component: CreateTeamComponent}
]}];
