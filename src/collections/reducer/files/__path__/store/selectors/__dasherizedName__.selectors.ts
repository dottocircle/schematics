import { createSelector } from '@ngrx/store';

import { get<%= featureName %>State } from '../reducers';

export const get<%= classifiedName %>State = createSelector(
  get<%= featureName %>State,
  (state) => {
    if (state == null) {
      return null;
    }
    return state.<%= camelizedName %>;
  }
);
