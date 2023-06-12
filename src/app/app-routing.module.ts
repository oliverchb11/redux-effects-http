import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './users/user/user.component';
import { ListComponent } from './users/list/list.component';

const routes: Routes = [
  {
    path: 'home',
    component: ListComponent
  },
  {
    path: 'usuario/:id',
    component: UserComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
