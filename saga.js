/* global fetch */

import { all, call, delay, put, take, takeLatest } from 'redux-saga/effects'
import es6promise from 'es6-promise'
import 'isomorphic-unfetch'

import { actionTypes, failure, fetUsersSuccess} from './actions'

es6promise.polyfill()

function* getProfile (user){
  try {
    const res = yield call(fetch, `${user.url}`)
   
    const profile = yield res.json()
    user.profile = profile
    if(profile && profile.message){
      yield put(failure('API rate limit exceeded'))
    }
    return user
  } catch (error) {
    user.profile = null
    return user
    yield put(failure(err))
  }
}

function* fetchGithubUsersByLocation(action) {
  try {
    const res = yield call(fetch, `https://api.github.com/search/users?q=location:${action.location}`)
    const users = yield res.json()

    const usersProfile = yield all(users.items.map(user=> call(getProfile, user)))
    console.log(usersProfile)
    yield put(fetUsersSuccess(usersProfile))    
  } catch (err) {
    console.log(err)
    yield put(failure(err))
  }
}

function* rootSaga() {
  yield all([
    takeLatest(actionTypes.GET_USERS, fetchGithubUsersByLocation),
  ])
}

export default rootSaga
