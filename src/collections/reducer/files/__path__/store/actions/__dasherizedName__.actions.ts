import { Action } from '@ngrx/store';

export enum <%= classifiedName %>ActionTypes {
  Load<%= classifiedName %> = '[<%= spacedName %>] Load',
  Load<%= classifiedName %>Success = '[<%= spacedName %>] Load Success',
  Load<%= classifiedName %>Fail = '[<%= spacedName %>] Load Fail'
}

export class Load<%= classifiedName %> implements Action {
  readonly type = <%= classifiedName %>ActionTypes.Load<%= classifiedName %>;
}

export class Load<%= classifiedName %>Success implements Action {
  readonly type = <%= classifiedName %>ActionTypes.Load<%= classifiedName %>Success;

  constructor( public payload: any ) { }
}

export class Load<%= classifiedName %>Fail implements Action {
  readonly type = <%= classifiedName %>ActionTypes.Load<%= classifiedName %>Fail;
}

export type <%= classifiedName %>Actions =
  | Load<%= classifiedName %>
  | Load<%= classifiedName %>Success
  | Load<%= classifiedName %>Fail;
