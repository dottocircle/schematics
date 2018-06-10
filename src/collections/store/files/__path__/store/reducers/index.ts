import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

// from reducer


export interface <%= classifiedName %>State {

}

export const reducers: ActionReducerMap<<%= classifiedName %>State> = {

};

export const get<%= classifiedName %>State = createFeatureSelector<<%= classifiedName %>State>(
  '<%= camelizedName %>'
);

// export reducer state interfaces
