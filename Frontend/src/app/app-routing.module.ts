import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import  {ToterListComponent} from './Componentes/toter-list/toter-list.component'
import {ToterFormComponent} from './Componentes/toter-form/toter-form.component'

const routes: Routes = [
  {
    path: '',
    redirectTo: '/toters',
    pathMatch: 'full'
  },
  {
    path: 'toters',
    component: ToterListComponent
  },
  {
    path: 'toters/add',
    component: ToterFormComponent
  },
  {
    path: 'toters/edit/:id',
    component: ToterFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
