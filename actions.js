export const actionTypes = {
  FAILURE: 'FAILURE',
  GET_USERS: 'GET_USERS',
  GET_USERS_SUCCESS: 'GET_USERS_SUCCESS',
  RESET: 'RESET',
}

export function failure(error) {
  return {
    type: actionTypes.FAILURE,
    error,
  }
}

export function getUsers() {
  return { type: actionTypes.GET_USERS }
}

export function fetUsersSuccess(users) {
  return { 
    type: actionTypes.GET_USERS_SUCCESS,
    users
   }
}

export function reset() {
  return { type: actionTypes.RESET }
}