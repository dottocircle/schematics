import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';

// rxjs
import { of } from 'rxjs';
import { mergeMap, catchError } from 'rxjs/operators';

import { 
  <%= classifiedName %>ActionTypes,
  Load<%= classifiedName %>Success,
  Load<%= classifiedName %>Fail
 } from '../actions/<%= dasherizedName %>.actions';

@Injectable()
export class <%= classifiedName %>Effects {
  constructor(private actions$: Actions) {}

  @Effect()
  effect$ = this.actions$
    .ofType(<%= classifiedName %>ActionTypes.Load<%= classifiedName %>)
    .pipe(
      mergeMap((action: any) => of(new Load<%= classifiedName %>Success(action.payload))),
      catchError(error => of(new Load<%= classifiedName %>Fail()))
    );
}
