import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { <%= classifiedName %>RoutingModule } from './<%= dasherizedName %>-routing.module';
import { <%= classifiedName %>Component } from './<%= dasherizedName %>.component';

@NgModule({
  imports: [CommonModule, <%= classifiedName %>RoutingModule],
  declarations: [<%= classifiedName %>Component]
})
export class <%= classifiedName %>Module {}
