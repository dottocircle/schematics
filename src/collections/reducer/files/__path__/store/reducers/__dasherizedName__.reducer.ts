import { 
  <%= classifiedName %>ActionTypes,
  <%= classifiedName %>Actions
} from '../actions/<%= dasherizedName %>.actions';

export interface <%= classifiedName %>State {
  data: any;
  loading: boolean;
  loaded: boolean;
}

export const initialState: <%= classifiedName %>State = {
  data: null,
  loading: false,
  loaded: false
};

export function reducer(
  state = initialState,
  action: <%= classifiedName %>Actions
): <%= classifiedName %>State {
  switch (action.type) {
    case <%= classifiedName %>ActionTypes.Load<%= classifiedName %>: {
      return {
        ...state,
        loading: true
      };
    }
    case <%= classifiedName %>ActionTypes.Load<%= classifiedName %>Success: {
      return {
        ...state,
        loading: false,
        loaded: true,
        data: action.payload
      };
    }
    case <%= classifiedName %>ActionTypes.Load<%= classifiedName %>Fail: {
      return {
        ...state,
        loading: false,
        loaded: false
      };
    }
  }
  return state;
}
