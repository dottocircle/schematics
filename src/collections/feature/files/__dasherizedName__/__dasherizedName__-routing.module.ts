import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { <%= classifiedName %>Component } from './<%= dasherizedName %>.component';

const routes: Routes = [
  {
    path: '',
    component: <%= classifiedName %>Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class <%= classifiedName %>RoutingModule { }
