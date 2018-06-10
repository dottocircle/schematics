import { createSelector } from '@ngrx/store';

import {  } from '../reducers';

export const get<%= classifiedName %>State = createSelector(
  '__',
  (state) => {
    if (state == null) {
      return null;
    }
    return state.<%= camelizedName %>;
  }
);
