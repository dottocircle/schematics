import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// ngrx
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { <%= classifiedName %>RoutingModule } from './<%= dasherizedName %>-routing.module';
import { <%= classifiedName %>Component } from './<%= dasherizedName %>.component';

// ngrx feature store
import { reducers, effects, guards } from './store';

// feature
import { components } from './components';
import { containers } from './containers';

@NgModule({
  imports: [
    CommonModule,
    <%= classifiedName %>RoutingModule,
    StoreModule.forFeature('<%= camelizedName %>', reducers),
    EffectsModule.forFeature(effects)
  ],
  declarations: [<%= classifiedName %>Component, components, containers],
  providers: [guards]
})
export class <%= classifiedName %>Module {}
