import { actionTypes } from './actions'

export const exampleInitialState = {
  users: null,
  error: false,
}

function reducer(state = exampleInitialState, action) {
  switch (action.type) {
    case actionTypes.FAILURE:
      return {
        ...state,
        ...{ error: action.error },
      }

    case actionTypes.GET_USERS_SUCCESS:
      return {
        ...state,
        ...{ users: action.users },
      }

    case actionTypes.RESET:
      return {
        ...state,
        ...{ count: exampleInitialState.count },
      }
      
    default:
      return state
  }
}

export default reducer
