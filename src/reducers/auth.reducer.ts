import * as auth from '../actions/auth.actions';

export interface State {
  loading: boolean;
  entities: { [id: string]: any };
  result: string[];
}

export const initialState: State = {
  loading: false,
  entities: {},
  result: []
}

export function reducer(state = initialState, action: auth.Actions): State {
  switch (action.type) {
    case auth.LOGIN: {
      return {
        ...state,
        loading: true
      }
    }

    case auth.LOGIN_SUCCESS: {

      return {
        ...state,
        loading: false,
      };
    }

     case auth.LOGIN_FAIL: {

      return {
        ...state,
        loading: false,
      };
    }

    case auth.LOGOUT: {
      return {
        ...state,
        loading: true
      }
    }

    case auth.LOGOUT_SUCCESS: {

      return {
        ...state,
        loading: false,
      };
    }

     case auth.LOGOUT_FAIL: {

      return {
        ...state,
        loading: false,
      };
    }

    default: {
      return state;
    }
  }
}