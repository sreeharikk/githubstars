export const actionTypes = {
  FAILURE: 'FAILURE',
  INPUT_VALUE: 'INPUT_VALUE',
  SET_LOADER: 'SET_LOADER',
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

export function setLoader(isLoading) {
  return { 
    type: actionTypes.SET_LOADER,
    isLoading
  }
}

export function setLocation(location) {
  return { 
    type: actionTypes.INPUT_VALUE,
    location
  }
}

export function getUsers(location) {
  return { 
    type: actionTypes.GET_USERS,
    location
  }
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