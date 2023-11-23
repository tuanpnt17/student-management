import {Routes} from '@angular/router';
import {AddComponent} from "./add/add.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {UpdateComponent} from "./update/update.component";

export const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'add', component: AddComponent},
  {path: 'update', component: UpdateComponent},
  {path: '**', component: PageNotFoundComponent},
];
